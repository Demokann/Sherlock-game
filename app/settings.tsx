import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { COLORS } from '../constants/colors';
import { TYPOGRAPHY } from '../constants/typography';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsPage() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [language, setLanguage] = useState<'TR' | 'EN'>('TR');

  const SettingRow = ({ label, icon, children }: { label: string, icon: string, children: React.ReactNode }) => (
    <View style={styles.settingRow}>
      <View style={styles.labelContainer}>
        <Ionicons name={icon as any} size={24} color={COLORS.secondary} style={styles.icon} />
        <Text style={styles.settingLabel}>{label}</Text>
      </View>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Ayarlar" />
      
      <View style={styles.content}>
        <SettingRow label="Ses Efektleri" icon="volume-high">
          <Switch 
            value={isSoundEnabled} 
            onValueChange={setIsSoundEnabled}
            trackColor={{ false: '#333', true: COLORS.secondary }}
            thumbColor={isSoundEnabled ? '#fff' : '#f4f3f4'}
          />
        </SettingRow>

        <SettingRow label="Dil Seçimi" icon="language">
          <View style={styles.languageButtons}>
            <TouchableOpacity 
              onPress={() => setLanguage('TR')}
              style={[styles.langButton, language === 'TR' && styles.activeLang]}
            >
              <Text style={[styles.langText, language === 'TR' && styles.activeLangText]}>TR</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setLanguage('EN')}
              style={[styles.langButton, language === 'EN' && styles.activeLang]}
            >
              <Text style={[styles.langText, language === 'EN' && styles.activeLangText]}>EN</Text>
            </TouchableOpacity>
          </View>
        </SettingRow>

        <View style={styles.aboutSection}>
          <Text style={styles.versionText}>Versiyon 1.0.0</Text>
          <Text style={styles.creditsText}>Made by Demo and Ouzz</Text>
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
    padding: 20,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  settingLabel: {
    ...TYPOGRAPHY.body,
    fontSize: 18,
  },
  languageButtons: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 8,
    padding: 4,
  },
  langButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  activeLang: {
    backgroundColor: COLORS.secondary,
  },
  langText: {
    ...TYPOGRAPHY.body,
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeLangText: {
    color: COLORS.primary,
  },
  aboutSection: {
    marginTop: 60,
    alignItems: 'center',
  },
  versionText: {
    ...TYPOGRAPHY.caption,
    marginBottom: 8,
  },
  creditsText: {
    ...TYPOGRAPHY.caption,
    fontStyle: 'italic',
    opacity: 0.6,
  },
});
