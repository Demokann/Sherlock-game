import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@sherlock_solved_stories';

export const useProgress = () => {
  const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async (): Promise<void> => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSolvedIds(new Set(JSON.parse(stored)));
      }
    } catch (error) {
      console.error('Progress yüklenirken hata:', error);
    }
  };

  const markSolved = useCallback(async (id: string): Promise<void> => {
    try {
      setSolvedIds((prev) => {
        const newSolvedIds = new Set(prev);
        newSolvedIds.add(id);
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(newSolvedIds))).catch(console.error);
        return newSolvedIds;
      });
    } catch (error) {
      console.error('Progress kaydedilirken hata:', error);
    }
  }, []);

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
  };
};
