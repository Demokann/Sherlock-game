import { useState, useCallback, useMemo, useEffect } from 'react';
import { STORIES, Story } from '../data/stories';
import { useProgress } from './useProgress';

type GameMode = 'random' | 'manual';

interface GameSessionProps {
  mode: GameMode;
  initialStoryId?: string;
}

export const useGameSession = ({ mode, initialStoryId }: GameSessionProps) => {
  const { markAsSolved, isSolved } = useProgress();
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [sessionSolvedIds, setSessionSolvedIds] = useState<Set<string>>(new Set());
  const [lastFailedId, setLastFailedId] = useState<string | null>(null);
  const [hintIndex, setHintIndex] = useState(0);

  // Fisher-Yates Shuffle
  const shuffleStories = useCallback((stories: Story[]) => {
    const shuffled = [...stories];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const getNextRandomStory = useCallback(() => {
    const availableStories = STORIES.filter(
      s => !sessionSolvedIds.has(s.id) && s.id !== lastFailedId
    );

    if (availableStories.length === 0) {
      // Tüm hikayeler bittiyse session'ı sıfırla (lastFailed hariç)
      setSessionSolvedIds(new Set());
      const resetAvailable = STORIES.filter(s => s.id !== lastFailedId);
      const shuffled = shuffleStories(resetAvailable);
      return shuffled[0];
    }

    const shuffled = shuffleStories(availableStories);
    return shuffled[0];
  }, [sessionSolvedIds, lastFailedId, shuffleStories]);

  useEffect(() => {
    if (mode === 'manual' && initialStoryId) {
      const story = STORIES.find(s => s.id === initialStoryId);
      setCurrentStory(story || null);
    } else if (mode === 'random') {
      setCurrentStory(getNextRandomStory());
    }
  }, [mode, initialStoryId, getNextRandomStory]);

  const handleSolved = useCallback(() => {
    if (currentStory) {
      markAsSolved(currentStory.id);
      setSessionSolvedIds(prev => new Set(prev).add(currentStory.id));
      setLastFailedId(null);
      setHintIndex(0);
      
      if (mode === 'random') {
        setCurrentStory(getNextRandomStory());
      }
    }
  }, [currentStory, markAsSolved, mode, getNextRandomStory]);

  const handleFailed = useCallback(() => {
    if (currentStory) {
      setLastFailedId(currentStory.id);
      setHintIndex(0);
      
      if (mode === 'random') {
        setCurrentStory(getNextRandomStory());
      }
    }
  }, [currentStory, getNextRandomStory, mode]);

  const showNextHint = useCallback(() => {
    if (currentStory && hintIndex < currentStory.hints.length) {
      setHintIndex(prev => prev + 1);
    }
  }, [currentStory, hintIndex]);

  const currentHints = useMemo(() => {
    if (!currentStory) return [];
    return currentStory.hints.slice(0, hintIndex);
  }, [currentStory, hintIndex]);

  return {
    currentStory,
    handleSolved,
    handleFailed,
    showNextHint,
    currentHints,
    hasMoreHints: currentStory ? hintIndex < currentStory.hints.length : false,
    isManual: mode === 'manual',
  };
};
