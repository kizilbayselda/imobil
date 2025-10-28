# İyilik Kervanı Derneği - Modern Web Sitesi

Modern, responsive ve kullanıcı dostu web sitesi.

## 🚀 Özellikler

- ✅ **Next.js 15** - React framework
- ✅ **TypeScript** - Tip güvenliği
- ✅ **Tailwind CSS** - Modern styling
- ✅ **Responsive Design** - Mobil uyumlu
- ✅ **Admin Panel** - İçerik yönetimi
- ✅ **Supabase Ready** - Backend entegrasyonu hazır

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
npm start
```

## 📂 Proje Yapısı

```
web/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Ana sayfa
│   │   ├── admin/
│   │   │   └── page.tsx      # Admin panel
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── News.tsx
│   │   ├── Videos.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── lib/
├── public/
│   └── images/
└── package.json
```

## 🌐 Sayfa Bölümleri

- 🏠 **Hero** - Etkileyici giriş
- ℹ️ **Hakkımızda** - Dernek bilgileri
- 📋 **Projeler** - Yardım projeleri
- 📰 **Haberler** - Son gelişmeler
- 🎥 **Videolar** - Faaliyetler
- 📞 **İletişim** - İletişim bilgileri ve bağış

## 🔐 Admin Panel

- Erişim: `/admin`
- Haber yönetimi
- Video yönetimi
- (Supabase entegrasyonu ile geliştirilecek)

## 🎨 Renk Paleti

- **Primary**: #ba0840 (Kırmızı)
- **Secondary**: #2c3e50 (Koyu Mavi)
- **Accent**: #e74c3c (Parlak Kırmızı)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Geliştirme

```bash
# Linting
npm run lint

# Type check
npx tsc --noEmit
```

## 📄 Lisans

© 2024 İyilik Kervanı Derneği
