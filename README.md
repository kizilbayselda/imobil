# İyilik Kervanı Derneği - Full Stack Projesi

Modern web sitesi ve mobil uygulama ile İyilik Kervanı Derneği'nin dijital varlığı.

## 📋 Proje Hakkında

Bu proje, İyilik Kervanı Derneği için geliştirilmiş modern, responsive ve kullanıcı dostu bir dijital platformdur. Web sitesi ve mobil uygulama içerir.

### 🎯 Özellikler

- ✅ **Modern Web Sitesi** (Next.js 15 + TypeScript)
- ✅ **Mobil Uygulama** (React Native + Expo)
- ✅ **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- ✅ **Admin Panel** - İçerik yönetimi
- ✅ **Supabase Ready** - Backend entegrasyonu hazır
- ✅ **SEO Optimized** - Arama motorları için optimize edilmiş

## 📁 Proje Yapısı

```
imobil/
├── web/                    # Next.js Web Uygulaması
│   ├── src/
│   │   ├── app/           # Next.js App Router
│   │   │   ├── page.tsx   # Ana sayfa
│   │   │   └── admin/     # Admin panel
│   │   ├── components/    # React bileşenleri
│   │   └── lib/          # Utility fonksiyonlar
│   └── public/           # Statik dosyalar
│
├── mobile/                # React Native Mobil Uygulama
│   ├── app/              # Expo Router
│   │   └── (tabs)/       # Tab navigasyon ekranları
│   ├── components/       # React Native bileşenleri
│   └── constants/        # Sabitler ve tema
│
└── temp_source/          # Orijinal proje referansı
```

## 🚀 Hızlı Başlangıç

### Web Uygulaması

```bash
# Web klasörüne git
cd web

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Tarayıcıda aç: http://localhost:3000
```

### Mobil Uygulama

```bash
# Mobile klasörüne git
cd mobile

# Bağımlılıkları yükle
npm install

# Expo sunucusunu başlat
npm start

# iOS/Android/Web seçeneklerinden birini seç
```

## 🌐 Web Sitesi Bölümleri

1. **🏠 Ana Sayfa** - Hero section, istatistikler
2. **ℹ️ Hakkımızda** - Dernek bilgileri, değerler
3. **📋 Projeler** - Yardım projeleri (Çeyiz, Burs, Gıda, vb.)
4. **📰 Haberler** - Son gelişmeler ve duyurular
5. **🎥 Videolar** - Faaliyet videoları
6. **📞 İletişim** - İletişim bilgileri ve bağış
7. **🔐 Admin Panel** - İçerik yönetimi

## 📱 Mobil Uygulama Ekranları

1. **Ana Sayfa** - Özet bilgiler, hızlı erişim
2. **Haberler** - Son gelişmeler
3. **Videolar** - Faaliyet videoları
4. **Hakkımızda** - Dernek bilgileri, iletişim, bağış

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: `#ba0840` (Kırmızı)
- **Secondary**: `#2c3e50` (Koyu Mavi)
- **Accent**: `#e74c3c` (Parlak Kırmızı)

### Tipografi
- **Display**: Playfair Display
- **Body**: Poppins

## 🔧 Teknolojiler

### Web
- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Mobile
- **Framework**: React Native + Expo
- **Navigation**: Expo Router
- **Icons**: Ionicons
- **Language**: TypeScript

### Backend (Hazır)
- **Database**: Supabase (entegre edilecek)
- **Storage**: Supabase Storage
- **Auth**: Supabase Auth

## 📦 Kurulum Gereksinimleri

- Node.js 18+
- npm veya yarn
- Git

### Mobil için ek gereksinimler:
- iOS: Xcode (Mac)
- Android: Android Studio
- Expo Go App (test için)

## 🔐 Admin Panel

Admin paneline erişim: `/admin`

Özellikler:
- Haber ekleme/düzenleme/silme
- Video yönetimi
- Görsel yükleme

## 🚢 Deployment

### Web (Vercel)
```bash
cd web
npm run build
vercel deploy
```

### Mobile (Expo)
```bash
cd mobile
npx expo build:android
npx expo build:ios
```

## 📝 Geliştirme Notları

- Web uygulaması production-ready durumda
- Mobil uygulama temel özelliklerle hazır
- Supabase backend entegrasyonu eklenecek
- Admin paneli için authentication eklenecek

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

© 2024 İyilik Kervanı Derneği. Tüm hakları saklıdır.

## 📞 İletişim

- **Web**: [iyilikkervanidernegi.com](https://iyilikkervanidernegi.com)
- **E-posta**: info@iyilikkervani.org
- **GitHub**: [kizilbayselda/imobil](https://github.com/kizilbayselda/imobil)

---

**🎉 Modern ve profesyonel tasarımıyla İyilik Kervanı Derneği'nin dijital varlığı!**
