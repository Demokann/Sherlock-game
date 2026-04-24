import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@sherlock_solved_stories';

export const useProgress = () => {
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());

  const loadProgress = useCallback(async (): Promise<void> => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as string[];
        setSolvedIds(new Set(parsed));
      } else {
        setSolvedIds(new Set());
      }
    } catch (error) {
      console.error('Progress yüklenirken hata:', error);
    }
  }, []);

  useEffect(() => {
    void loadProgress();
  }, [loadProgress]);

  const markSolved = useCallback(async (id: string): Promise<void> => {
    try {
      const nextSolvedIds = new Set(solvedIds);
      nextSolvedIds.add(id);
      setSolvedIds(nextSolvedIds);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(nextSolvedIds)));
    } catch (error) {
      console.error('Progress kaydedilirken hata:', error);
    }
  }, [solvedIds]);

  const reset = useCallback(async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setSolvedIds(new Set());
    } catch (error) {
      console.error('Progress sıfırlanırken hata:', error);
    }
  }, []);

  return {
    solvedIds,
    markSolved,
    reset,
    refreshProgress: loadProgress,
  };
};
