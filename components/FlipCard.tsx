import React from 'react';
import { StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming, 
  interpolate,
  Easing
} from 'react-native-reanimated';
import { COLORS } from '../constants/colors';
import { TYPOGRAPHY } from '../constants/typography';

interface FlipCardProps {
  question: string;
  solution: string;
  title: string;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const CARD_HEIGHT = CARD_WIDTH * 1.4;

export const FlipCard: React.FC<FlipCardProps> = ({ question, solution, title }) => {
  const spin = useSharedValue(0);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        { perspective: 1000 },
        { rotateY: `${spinVal}deg` },
      ],
      opacity: spin.value <= 0.5 ? 1 : 0,
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        { perspective: 1000 },
        { rotateY: `${spinVal}deg` },
      ],
      opacity: spin.value > 0.5 ? 1 : 0,
    };
  });

  const handleFlip = () => {
    spin.value = withTiming(spin.value === 0 ? 1 : 0, { 
      duration: 400,
      easing: Easing.inOut(Easing.ease)
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleFlip} style={styles.cardWrapper}>
        <Animated.View style={[styles.card, styles.cardFront, frontAnimatedStyle]}>
          <Text style={styles.categoryTitle}>{title}</Text>
          <View style={styles.contentContainer}>
            <Text style={styles.questionText}>{question}</Text>
          </View>
          <Text style={styles.hintText}>Çözümü görmek için dokun</Text>
        </Animated.View>

        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
          <Text style={[styles.categoryTitle, { color: COLORS.accent }]}>ÇÖZÜM</Text>
          <View style={styles.contentContainer}>
            <Text style={styles.solutionText}>{solution}</Text>
          </View>
          <Text style={styles.hintText}>Soruya dönmek için dokun</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 20,
    padding: 24,
    position: 'absolute',
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  cardFront: {
    backgroundColor: COLORS.cardFront,
  },
  cardBack: {
    backgroundColor: COLORS.cardBack,
  },
  categoryTitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.secondary,
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  questionText: {
    ...TYPOGRAPHY.body,
    fontSize: 22,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  solutionText: {
    ...TYPOGRAPHY.body,
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 28,
  },
  hintText: {
    ...TYPOGRAPHY.caption,
    marginTop: 20,
    opacity: 0.6,
  },
});
