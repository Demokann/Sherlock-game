# Project Context Snapshot
> Token Optimizasyon Dosyası — Ajanlar tüm kodu okumak zorunda kalmasın diye

**Son Güncelleme:** 18.04.2026
**Güncelleyen:** Demokan

---

## 1. Proje Durumu

```
Versiyon  : 1.0.0
Platform  : Expo SDK 54, React Native, TypeScript
Navigasyon: Expo Router (dosya tabanlı)
Animasyon : react-native-reanimated v3
```

---

## 2. Dosya Ağacı (Kaynak Haritası)

```
sherlock-game/
├── app/
│   ├── index.tsx         → Ana karşılama ekranı
│   ├── game.tsx          → Oyun döngüsü ekranı
│   └── _layout.tsx       → Root layout (Expo Router)
│
├── components/
│   └── FlipCard.tsx      → 3D kart çevirme animasyonu
│
├── hooks/
│   └── useStory.ts       → Rastgele hikaye seçim mantığı
│
├── data/
│   └── stories.ts        → Hikaye veritabanı (10+ kayıt)
│
├── constants/
│   ├── colors.ts         → Renk paleti (tasarım sistemi)
│   └── typography.ts     → Font sistemi (tasarım sistemi)
│
└── agents/               → Bu klasör (ajan tanımları)
    ├── planning.md
    ├── ui_designer.md
    ├── backend_dev.md
    ├── reviewer.md
    └── project_context.md  ← Bu dosya
```

---

## 3. API Haritası (Public Interface)

### `hooks/useStory.ts`
```typescript
function useStory(): {
  currentStory: Story | null;
  nextStory: () => void;
  isLoading: boolean;
  solvedCount: number;
  totalCount: number;
}
```
**Kullanıldığı yer:** `app/game.tsx`

---

### `components/FlipCard.tsx`
```typescript
interface FlipCardProps {
  question: string;
  solution: string;
  onFlip?: (side: 'question' | 'solution') => void;
}
// Default export
```
**Kullanıldığı yer:** `app/game.tsx`

---

### `data/stories.ts`
```typescript
interface Story {
  id: string;          // Örn: 'story_001'
  title: string;
  question: string;
  solution: string;
  category: 'murder' | 'mystery' | 'riddle' | 'horror';
  difficulty?: 'easy' | 'medium' | 'hard';
}

export const stories: Story[] = [ /* 10+ hikaye */ ];
```

---

### `constants/colors.ts`
```typescript
export const Colors = {
  background: '#1A1A1A',  // Ana arka plan (derin siyah)
  surface:    '#2A2A2A',  // Kart, modal arka planı
  gold:       '#C9A227',  // Birincil vurgu (altın sarısı)
  crimson:    '#E74C3C',  // İkincil vurgu (kan kırmızısı)
  text:       '#F5F5F0',  // Ana metin (kirli beyaz)
  textMuted:  '#8A8A7A',  // İkincil metin
  border:     '#3A3A2A',  // Kenarlık rengi
};
```

---

### `constants/typography.ts`
```typescript
import { Platform } from 'react-native';

export const Typography = {
  heading: {
    fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    fontSize: 24,
    fontWeight: '700' as const,
    color: Colors.gold,
  },
  body: {
    fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    fontSize: 16,
    lineHeight: 26,
    color: Colors.text,
  },
  caption: {
    fontSize: 12,
    color: Colors.textMuted,
  },
};
```

---

## 4. Ekran Akış Haritası

```
app/index.tsx (Ana Ekran)
  │
  ├─ [Yeni Oyun] ──────────────→ app/game.tsx
  │                                  │
  │                                  ├─ useStory() hook'u çağırır
  │                                  │     └─ data/stories.ts'den hikaye çeker
  │                                  │
  │                                  └─ <FlipCard /> render eder
  │                                        ├─ Ön yüz: currentStory.question
  │                                        └─ Arka yüz: currentStory.solution
  │
  ├─ [Nasıl Oynanır] ──────────→ app/how-to-play.tsx (HENÜZ YOK)
  │
  └─ [Ayarlar] ────────────────→ app/settings.tsx (HENÜZ YOK)
```

---

## 5. Değişiklik Geçmişi (Diff Log)

> Ajanlar her değişiklikten sonra buraya bir satır ekler.
> Format: `[TARİH] [AJAN] [DOSYA] — [NE DEĞİŞTİ]`

```
[2024-01-01] [Backend Dev] data/stories.ts — İlk 10 hikaye eklendi
[2024-01-01] [UI Designer] components/FlipCard.tsx — 3D flip animasyonu oluşturuldu
[2024-01-01] [Backend Dev] hooks/useStory.ts — Fisher-Yates shuffle ile rastgele seçim
[2024-01-01] [UI Designer] app/index.tsx — Ana ekran UI oluşturuldu
[2024-01-01] [UI Designer] app/game.tsx — Oyun ekranı UI oluşturuldu
```

---

## 6. Bilinen Kısıtlamalar & Teknik Borç

| # | Sorun | Seviye | Hedef Sprint |
|---|-------|--------|-------------|
| 1 | Hikayeler session'lar arası sıfırlanıyor (AsyncStorage yok) | MEDIUM | v1.1 |
| 2 | Kategori filtresi henüz implementli değil | LOW | v1.1 |
| 3 | Hint sistemi tasarlanmadı | LOW | v1.1 |
| 4 | Erişilebilirlik (a11y) özellikleri eksik | MEDIUM | v1.2 |

---

## 7. Ajan Güncelleme Protokolü

Bu dosyayı **ne zaman** güncellersin:
- Yeni dosya oluşturduktan sonra → Dosya Ağacı bölümüne ekle
- Yeni public fonksiyon/hook yazdıktan sonra → API Haritası bölümüne ekle
- Mevcut arayüzü değiştirdikten sonra → API Haritası'nı güncelle
- Ekran akışı değiştiğinde → Ekran Akış Haritası'nı güncelle

Bu dosyayı **nasıl** güncellersin:
- Sadece değişen bölümü güncelle (tüm dosyayı yeniden yazma)
- Diff Log'a her zaman bir satır ekle
- Tarihi gerçek tarihe göre yaz
