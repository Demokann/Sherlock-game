import { useState, useCallback } from 'react';
import { STORIES, Story } from '../data/stories';

export const useStory = () => {
  const [currentStory, setCurrentStory] = useState<Story>(() => {
    const randomIndex = Math.floor(Math.random() * STORIES.length);
    return STORIES[randomIndex];
  });

  const nextStory = useCallback(() => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * STORIES.length);
    } while (STORIES.length > 1 && STORIES[nextIndex].id === currentStory.id);
    
    setCurrentStory(STORIES[nextIndex]);
  }, [currentStory.id]);

  return {
    currentStory,
    nextStory,
  };
};
