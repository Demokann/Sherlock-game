import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, GestureResponderEvent } from 'react-native';
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
  const [isFlipped, setIsFlipped] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

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
    const next = !isFlipped;
    setIsFlipped(next);
    spin.value = withTiming(next ? 1 : 0, { 
      duration: 400,
      easing: Easing.inOut(Easing.ease)
    });
  };

  const handleTouchStart = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;
    touchStartRef.current = { x: pageX, y: pageY, time: Date.now() };
  };

  const handleTouchEnd = (event: GestureResponderEvent) => {
    if (!touchStartRef.current) return;

    const { pageX, pageY } = event.nativeEvent;
    const dx = Math.abs(pageX - touchStartRef.current.x);
    const dy = Math.abs(pageY - touchStartRef.current.y);
    const elapsed = Date.now() - touchStartRef.current.time;

    // A short, stationary touch flips the card; drag gestures remain for scrolling.
    if (dx < 8 && dy < 8 && elapsed < 300) {
      handleFlip();
    }

    touchStartRef.current = null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Animated.View
          style={[styles.card, styles.cardFront, frontAnimatedStyle]}
          pointerEvents={isFlipped ? 'none' : 'auto'}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchStartRef.current = null;
          }}
        >
          <Text style={styles.categoryTitle}>{title}</Text>
          <ScrollView
            style={styles.contentContainer}
            contentContainerStyle={styles.contentInner}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
          >
            <Text style={styles.questionText}>{question}</Text>
          </ScrollView>
          <Text style={styles.hintText}>Çözümü görmek için dokun</Text>
        </Animated.View>

        <Animated.View
          style={[styles.card, styles.cardBack, backAnimatedStyle]}
          pointerEvents={isFlipped ? 'auto' : 'none'}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchStartRef.current = null;
          }}
        >
          <Text style={[styles.categoryTitle, { color: COLORS.accent }]}>ÇÖZÜM</Text>
          <ScrollView
            style={styles.contentContainer}
            contentContainerStyle={styles.contentInner}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
          >
            <Text style={styles.solutionText}>{solution}</Text>
          </ScrollView>
          <Text style={styles.hintText}>Soruya dönmek için dokun</Text>
        </Animated.View>
      </View>
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
    width: '100%',
  },
  contentInner: {
    paddingVertical: 8,
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
