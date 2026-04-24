import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { COLORS } from '../constants/colors';
import { TYPOGRAPHY } from '../constants/typography';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../components/Header';

const { width } = Dimensions.get('window');

export default function ModeSelectPage() {
  const router = useRouter();

  const modes = [
    {
      id: 'random',
      title: 'Rastgele Hikayeler',
      description: 'Sırayla karışık gizemleri çözmeye çalış.',
      icon: 'shuffle-outline',
      route: '/game?mode=random',
      color: COLORS.secondary,
    },
    {
      id: 'manual',
      title: 'Manuel Seçim',
      description: 'Hikaye listesinden dilediğini seç.',
      icon: 'list-outline',
      route: '/story-select',
      color: COLORS.accent,
    },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.background, COLORS.primary]}
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerWrapper}>
          <Header title="MOD SEÇİMİ" showBack />
        </View>

        <View style={styles.content}>
          {modes.map((mode, index) => (
            <Animated.View
              key={mode.id}
              entering={FadeInUp.delay(index * 200).duration(500)}
            >
              <Pressable
                style={({ pressed }) => [
                  styles.card,
                  { borderColor: mode.color },
                  pressed && styles.cardPressed
                ]}
                onPress={() => router.push(mode.route as any)}
              >
                <View style={[styles.iconContainer, { backgroundColor: mode.color + '20' }]}>
                  <Ionicons name={mode.icon as any} size={40} color={mode.color} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.cardTitle}>{mode.title}</Text>
                  <Text style={styles.cardDescription}>{mode.description}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color={COLORS.textSecondary} />
              </Pressable>
            </Animated.View>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  safeArea: {
    flex: 1,
  },
  headerWrapper: {
    marginTop: 8,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardFront,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text,
    marginBottom: 4,
  },
  cardDescription: {
    ...TYPOGRAPHY.caption,
    fontSize: 14,
    lineHeight: 20,
  },
});
