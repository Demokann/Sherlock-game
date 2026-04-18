import { Platform } from 'react-native';

export const TYPOGRAPHY = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  h2: {
    fontSize: 24,
    fontWeight: '600' as const,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },
  body: {
    fontSize: 18,
    lineHeight: 26,
    color: '#FFFFFF',
  },
  caption: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold' as const,
    letterSpacing: 1.2,
  }
};
