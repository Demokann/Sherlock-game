import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Header } from '../components/Header';
import { FlipCard } from '../components/FlipCard';
import { Button } from '../components/Button';
import { useGameSession } from '../hooks/useGameSession';
import { COLORS } from '../constants/colors';
import { TYPOGRAPHY } from '../constants/typography';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown, SlideInDown } from 'react-native-reanimated';

export default function GamePage() {
  const router = useRouter();
  const { mode, storyId } = useLocalSearchParams<{ mode: 'random' | 'manual'; storyId?: string }>();
  const { 
    currentStory, 
    handleSolved, 
    handleFailed, 
    showNextHint, 
    currentHints, 
    hasMoreHints,
    isManual 
  } = useGameSession({ mode: mode || 'random', initialStoryId: storyId });

  const [hintModalVisible, setHintModalVisible] = useState(false);

  if (!currentStory) return null;

  const onSolvedPress = async () => {
    await handleSolved();
    if (isManual) router.back();
  };

  const onFailedPress = () => {
    handleFailed();
    if (isManual) router.back();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.background, COLORS.primary]}
        style={StyleSheet.absoluteFill}
      />
      
      <SafeAreaView style={styles.safeArea}>
        <Header title={isManual ? "MANUEL MOD" : "RASTGELE MOD"} showBack />
        
        <View style={styles.content}>
          <FlipCard 
            key={currentStory.id}
            title={currentStory.title}
            question={currentStory.question}
            solution={currentStory.solution}
          />
          
          <View style={styles.hintSection}>
            <Button 
              title={hasMoreHints ? "💡 İpucu Al" : "💡 İpuçları Tükendi"} 
              onPress={() => {
                if (hasMoreHints) showNextHint();
                setHintModalVisible(true);
              }}
              variant="outline"
              style={styles.hintButton}
              disabled={!hasMoreHints && currentHints.length === 0}
            />
          </View>

          <View style={styles.controls}>
            <View style={styles.actionButtons}>
              <Pressable 
                style={[styles.actionButton, styles.failedButton]} 
                onPress={onFailedPress}
              >
                <Ionicons name="close" size={32} color={COLORS.text} />
                <Text style={styles.actionButtonText}>Pas</Text>
              </Pressable>

              <Pressable 
                style={[styles.actionButton, styles.solvedButton]} 
                onPress={onSolvedPress}
              >
                <Ionicons name="checkmark" size={32} color={COLORS.text} />
                <Text style={styles.actionButtonText}>Çözüldü</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* Hint Modal */}
      <Modal
        visible={hintModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setHintModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <Animated.View entering={SlideInDown} style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>İPUÇLARI</Text>
              <Pressable onPress={() => setHintModalVisible(false)}>
                <Ionicons name="close" size={28} color={COLORS.textSecondary} />
              </Pressable>
            </View>

            <ScrollView style={styles.hintsList}>
              {currentHints.length === 0 ? (
                <Text style={styles.noHintsText}>Henüz ipucu alınmadı.</Text>
              ) : (
                currentHints.map((hint, index) => (
                  <Animated.View 
                    key={index} 
                    entering={FadeInDown.delay(index * 100)}
                    style={styles.hintItem}
                  >
                    <Text style={styles.hintNumber}>İpucu {index + 1}</Text>
                    <Text style={styles.hintText}>{hint}</Text>
                  </Animated.View>
                ))
              )}
            </ScrollView>

            {hasMoreHints && (
              <Button 
                title="Siradaki İpucunu Gör" 
                onPress={showNextHint}
                style={styles.nextHintBtn}
              />
            )}
          </Animated.View>
        </View>
      </Modal>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  hintSection: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: -10,
  },
  hintButton: {
    width: '100%',
    borderColor: COLORS.secondary,
  },
  controls: {
    width: '100%',
    paddingHorizontal: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  solvedButton: {
    backgroundColor: COLORS.success,
  },
  failedButton: {
    backgroundColor: COLORS.accent,
  },
  actionButtonText: {
    ...TYPOGRAPHY.button,
    color: COLORS.text,
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.cardFront,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    maxHeight: '70%',
    borderTopWidth: 2,
    borderTopColor: COLORS.secondary,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.secondary,
  },
  hintsList: {
    marginBottom: 20,
  },
  hintItem: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.secondary,
  },
  hintNumber: {
    ...TYPOGRAPHY.caption,
    color: COLORS.secondary,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  hintText: {
    ...TYPOGRAPHY.body,
    fontSize: 16,
  },
  noHintsText: {
    ...TYPOGRAPHY.body,
    textAlign: 'center',
    opacity: 0.5,
    marginVertical: 40,
  },
  nextHintBtn: {
    marginTop: 10,
  }
});
