import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Header } from '../components/Header';
import { FlipCard } from '../components/FlipCard';
import { Button } from '../components/Button';
import { useStory } from '../hooks/useStory';

export default function GamePage() {
  const { currentStory, nextStory } = useStory();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Oyun" />
      
      <View style={styles.content}>
        <FlipCard 
          title={currentStory.title}
          question={currentStory.question}
          solution={currentStory.solution}
        />
        
        <View style={styles.controls}>
          <Button 
            title="Sıradaki Hikaye" 
            onPress={nextStory}
            variant="primary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  controls: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
