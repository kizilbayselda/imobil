# Android APK Build Rehberi

Mobil uygulamayı APK dosyası olarak build etmek için 2 seçenek var:

## 🚀 Seçenek 1: EAS Build (Cloud) - **ÖNERİLEN**

Bu yöntem en kolay ve en hızlısıdır. Android Studio kurulumu gerektirmez.

### Adımlar:

1. **Expo hesabı oluşturun** (ücretsiz):
   - https://expo.dev/signup adresinden kayıt olun

2. **EAS CLI ile login yapın**:
   ```bash
   cd mobile
   eas login
   ```

3. **APK Build başlatın**:
   ```bash
   # Preview APK (test için)
   eas build -p android --profile preview

   # Production APK (yayın için)
   eas build -p android --profile production
   ```

4. **Build tamamlandığında**:
   - Expo dashboard'unda build linki görünecek
   - APK dosyasını indirebilirsiniz
   - QR kod ile telefona kurabilirsiniz

### Avantajlar:
- ✅ Android Studio gerektirmez
- ✅ Bulutta build olur (bilgisayarınız yavaşlamaz)
- ✅ Otomatik signing
- ✅ Ücretsiz tier mevcut (aylık 30 build)

---

## 🔧 Seçenek 2: Local Build (Android Studio ile)

Bu yöntem Android Studio kurulumu gerektirir.

### Gereksinimler:

1. **Android Studio'yu indirin ve kurun**:
   - https://developer.android.com/studio

2. **Android SDK kurulumu**:
   - Android Studio içinden SDK Manager'ı açın
   - Android 13 (API 33) veya üstünü kurun
   - Android SDK Build-Tools kurun

3. **ANDROID_HOME ortam değişkenini ayarlayın**:
   ```
   ANDROID_HOME=C:\Users\YourUsername\AppData\Local\Android\Sdk
   ```
   PATH'e ekleyin:
   ```
   %ANDROID_HOME%\platform-tools
   %ANDROID_HOME%\tools
   ```

4. **APK Build**:
   ```bash
   cd mobile/android
   gradlew.bat assembleDebug
   ```

5. **APK dosyası konumu**:
   ```
   mobile/android/app/build/outputs/apk/debug/app-debug.apk
   ```

### Avantajlar:
- ✅ Tam kontrol
- ✅ Offline build
- ✅ Hızlı iteration (tekrar build için)

### Dezavantajlar:
- ❌ Android Studio kurulumu gerekli (~4-5 GB)
- ❌ İlk build uzun sürer (~10-15 dk)
- ❌ Daha karmaşık setup

---

## 📱 APK Kurulumu

Build edilen APK'yı telefona kurmak için:

1. **APK dosyasını telefonunuza transfer edin**
   - USB, WhatsApp, Drive vs.

2. **Bilinmeyen kaynaklardan kuruluma izin verin**:
   - Ayarlar > Güvenlik > Bilinmeyen Kaynaklar

3. **APK dosyasını açın ve kurun**

---

## 🎯 Önerilen Yöntem

**İlk kez build ediyorsanız**: EAS Build kullanın (Seçenek 1)
- Daha kolay
- Hızlı başlangıç
- Ücretsiz

**Sürekli geliştirme yapacaksanız**: Local build kurun (Seçenek 2)
- Her build için ödeme yapmak istemiyorsanız
- Daha hızlı iteration

---

## 📞 Yardım

**EAS Build dokümantasyonu**: https://docs.expo.dev/build/setup/
**Android Studio kurulumu**: https://docs.expo.dev/workflow/android-studio-emulator/

## 🔐 Production Build için

Production APK oluşturmak istiyorsanız:

```bash
# EAS Build ile
eas build -p android --profile production

# Local build ile
cd mobile/android
gradlew.bat assembleRelease
```

**Not**: Release build için signing key gerekir. EAS Build bunu otomatik halleder.
