import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button';
import { TYPOGRAPHY } from '../constants/typography';
import { COLORS } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

export default function HomePage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Ionicons name="search" size={80} color={COLORS.secondary} />
          <Text style={styles.title}>SHERLOCK</Text>
          <Text style={styles.subtitle}>GİZEMLİ HİKAYELER</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            title="Yeni Oyun" 
            onPress={() => router.push('/mode-select')} 
          />
          <Button 
            title="Nasıl Oynanır?" 
            variant="outline"
            onPress={() => router.push('/how-to-play')} 
          />
          <Button 
            title="Ayarlar" 
            variant="outline"
            onPress={() => router.push('/settings')} 
          />
        </View>
      </View>
      
      <Text style={styles.footer}>© 2026 Deemouzz</Text>
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
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    ...TYPOGRAPHY.h1,
    fontSize: 48,
    color: COLORS.secondary,
    letterSpacing: 4,
    marginTop: 10,
  },
  subtitle: {
    ...TYPOGRAPHY.caption,
    fontSize: 18,
    letterSpacing: 2,
    marginTop: -5,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  footer: {
    ...TYPOGRAPHY.caption,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.5,
  },
});
