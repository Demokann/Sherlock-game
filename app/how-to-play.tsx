import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { TYPOGRAPHY } from '../constants/typography';
import { COLORS } from '../constants/colors';

export default function HowToPlayPage() {
  const rules = [
    {
      title: 'Roller',
      description: 'Bir kişi "Anlatıcı" (telefonu tutan) olur, diğerleri ise "Dedektif" olur.'
    },
    {
      title: 'Başlangıç',
      description: 'Anlatıcı hikayenin ön yüzündeki gizemi yüksek sesle okur.'
    },
    {
      title: 'Soru Sorma',
      description: 'Dedektifler, olayı çözmek için sadece "EVET" veya "HAYIR" cevabı alabilecekleri sorular sorarlar.'
    },
    {
      title: 'Anlatıcının Rolü',
      description: 'Anlatıcı kartın arkasındaki çözümü gizlice okur ve dedektiflerin sorularını yanıtlar.'
    },
    {
      title: 'Oyunun Sonu',
      description: 'Dedektifler hikayenin tam çözümünü tahmin ettiklerinde oyun biter.'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Nasıl Oynanır?" />
      <ScrollView contentContainerStyle={styles.content}>
        {rules.map((rule, index) => (
          <View key={index} style={styles.ruleItem}>
            <Text style={styles.ruleTitle}>{index + 1}. {rule.title}</Text>
            <Text style={styles.ruleDescription}>{rule.description}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  ruleItem: {
    marginBottom: 24,
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
  },
  ruleTitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.secondary,
    marginBottom: 8,
  },
  ruleDescription: {
    ...TYPOGRAPHY.body,
    fontSize: 16,
    lineHeight: 22,
    opacity: 0.9,
  },
});
