import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { STORIES, Story } from '../data/stories';
import { COLORS } from '../constants/colors';
import { TYPOGRAPHY } from '../constants/typography';
import { Header } from '../components/Header';
import { useProgress } from '../hooks/useProgress';
import { Ionicons } from '@expo/vector-icons';

export default function StorySelectPage() {
  const router = useRouter();
  const { solvedIds } = useProgress();

  const renderItem = ({ item, index }: { item: Story; index: number }) => {
    const solved = solvedIds.has(item.id);

    return (
      <Animated.View entering={FadeInRight.delay(index * 100).duration(400)}>
        <Pressable
          style={({ pressed }) => [
            styles.card,
            solved && styles.cardSolved,
            pressed && styles.cardPressed
          ]}
          onPress={() => router.push(`/game?storyId=${item.id}&mode=manual`)}
        >
          <View style={styles.cardContent}>
            <View style={styles.headerRow}>
              <Text style={[styles.storyTitle, solved && styles.textSolved]}>
                {item.title}
              </Text>
              {solved && (
                <Ionicons name="checkmark-circle" size={24} color={COLORS.success} />
              )}
            </View>
            <Text 
              style={[styles.storyDescription, solved && styles.textSolved]}
              numberOfLines={2}
            >
              {item.question}
            </Text>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
          </View>
          <Ionicons 
            name="chevron-forward" 
            size={20} 
            color={solved ? COLORS.textSecondary : COLORS.secondary} 
          />
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.background, COLORS.primary]}
        style={StyleSheet.absoluteFill}
      />
      
      <Header title="HİKAYELER" showBack />

      <FlatList
        data={STORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardFront,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardSolved: {
    opacity: 0.6,
    borderLeftColor: COLORS.textSecondary,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
  },
  cardContent: {
    flex: 1,
    marginRight: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  storyTitle: {
    ...TYPOGRAPHY.h2,
    fontSize: 20,
    color: COLORS.text,
  },
  storyDescription: {
    ...TYPOGRAPHY.caption,
    marginBottom: 8,
  },
  textSolved: {
    color: COLORS.textSecondary,
  },
  categoryBadge: {
    backgroundColor: COLORS.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.secondary + '40',
  },
  categoryText: {
    ...TYPOGRAPHY.caption,
    fontSize: 10,
    color: COLORS.secondary,
    textTransform: 'uppercase',
  },
});
