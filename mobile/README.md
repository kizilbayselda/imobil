# İyilik Kervanı - Mobil ve Web Uygulama 


React Native ve Expo ile geliştirilmiş modern mobil uygulama.

## 🚀 Özellikler

- ✅ **React Native + Expo** - Cross-platform mobil uygulama
- ✅ **TypeScript** - Tip güvenliği
- ✅ **Expo Router** - Dosya tabanlı navigasyon
- ✅ **Native Components** - iOS ve Android desteği
- ✅ **Tab Navigation** - Kolay gezinme
- ✅ **Supabase Ready** - Backend entegrasyonu hazır

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start

# iOS simülatörde çalıştır
npm run ios

# Android emülatörde çalıştır
npm run android

# Web'de çalıştır
npm run web
```

## 📱 Ekranlar

### Ana Sayfa (Home)
- Hero bölümü
- İstatistikler
- Projeler grid
- Hızlı bilgi kartları

### Haberler
- Haber listesi
- Resimli kartlar
- Tarih bilgisi
- Detay görüntüleme

### Videolar
- Video listesi
- Thumbnail önizleme
- Play button
- Süre göstergesi

### Hakkımızda
- Dernek bilgileri
- Değerler kartları
- İletişim bilgileri
- Sosyal medya linkleri
- Bağış bilgileri

## 📂 Proje Yapısı

```
mobile/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx     # Tab navigasyon
│   │   ├── index.tsx       # Ana sayfa
│   │   ├── news.tsx        # Haberler
│   │   ├── videos.tsx      # Videolar
│   │   └── about.tsx       # Hakkımızda
│   └── _layout.tsx         # Root layout
├── components/
├── constants/
│   └── Colors.ts           # Renk paleti
├── assets/
└── package.json
```

## 🎨 Renk Paleti

- **Primary**: #ba0840 (Kırmızı)
- **Secondary**: #2c3e50 (Koyu Mavi)
- **Accent**: #e74c3c (Parlak Kırmızı)

## 🔧 Geliştirme

```bash
# Type check
npx tsc --noEmit

# Clear cache
npx expo start -c
```

## 📱 Test

- iOS Simulator
- Android Emulator
- Expo Go (Fiziksel cihaz)

## 📄 Lisans

© 2024 İyilik Kervanı Derneği
