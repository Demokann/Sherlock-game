import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@sherlock_solved_stories';

export const useProgress = () => {
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSolvedIds(new Set(JSON.parse(stored)));
      }
    } catch (error) {
      console.error('Progress yüklenirken hata:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const markAsSolved = useCallback(async (id: string) => {
    try {
      const newSolvedIds = new Set(solvedIds);
      newSolvedIds.add(id);
      setSolvedIds(newSolvedIds);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(newSolvedIds)));
    } catch (error) {
      console.error('Progress kaydedilirken hata:', error);
    }
  }, [solvedIds]);

  const isSolved = useCallback((id: string) => {
    return solvedIds.has(id);
  }, [solvedIds]);

  return {
    solvedIds,
    isLoading,
    markAsSolved,
    isSolved,
    refreshProgress: loadProgress,
  };
};
