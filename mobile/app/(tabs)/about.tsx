import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default function AboutScreen() {
  const features = [
    {
      icon: 'heart',
      title: 'Sevgi ile Yaklaşım',
      description: 'Her bireye sevgi ve saygıyla yaklaşıyoruz',
    },
    {
      icon: 'people',
      title: 'Güvenilir Destek',
      description: 'Şeffaf ve güvenilir yardım süreçleri',
    },
    {
      icon: 'globe',
      title: 'Global Erişim',
      description: 'Dünya çapında yardım ağı',
    },
  ]

  const contactInfo = [
    {
      icon: 'call',
      title: 'Telefon',
      value: '+90 (XXX) XXX XX XX',
      action: () => Linking.openURL('tel:+90XXXXXXXXXX'),
    },
    {
      icon: 'mail',
      title: 'E-posta',
      value: 'info@iyilikkervani.org',
      action: () => Linking.openURL('mailto:info@iyilikkervani.org'),
    },
    {
      icon: 'location',
      title: 'Adres',
      value: 'Gebze, Kocaeli, Türkiye',
      action: () => {},
    },
  ]

  const socialMedia = [
    { icon: 'logo-facebook', label: 'Facebook' },
    { icon: 'logo-twitter', label: 'Twitter' },
    { icon: 'logo-instagram', label: 'Instagram' },
    { icon: 'logo-linkedin', label: 'LinkedIn' },
  ]

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hakkımızda</Text>
        <Text style={styles.headerSubtitle}>
          2009'dan beri ihtiyaç sahiplerinin yanında
        </Text>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.aboutText}>
          İyilik Kervanı Derneği, sosyal yardımlaşmayı ve dayanışmayı teşvik eden bir sivil toplum kuruluşudur.
        </Text>
        <Text style={styles.aboutText}>
          15 yıl önce küçük bir kömürlükte başlayan yolculuğumuz, bugün dünya çapında iyilik köprüleri kurarak devam ediyor.
        </Text>
      </View>

      {/* Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Değerlerimiz</Text>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Ionicons name={feature.icon as any} size={24} color={Colors.primary} />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Contact Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>İletişim Bilgileri</Text>
        {contactInfo.map((info, index) => (
          <TouchableOpacity
            key={index}
            style={styles.contactCard}
            onPress={info.action}
          >
            <View style={styles.contactIcon}>
              <Ionicons name={info.icon as any} size={20} color={Colors.primary} />
            </View>
            <View style={styles.contactContent}>
              <Text style={styles.contactTitle}>{info.title}</Text>
              <Text style={styles.contactValue}>{info.value}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={Colors.gray[400]} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Social Media */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sosyal Medya</Text>
        <View style={styles.socialContainer}>
          {socialMedia.map((social, index) => (
            <TouchableOpacity key={index} style={styles.socialButton}>
              <Ionicons name={social.icon as any} size={24} color={Colors.white} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Donation Info */}
      <View style={styles.section}>
        <View style={styles.donationCard}>
          <View style={styles.donationHeader}>
            <Ionicons name="wallet" size={24} color={Colors.primary} />
            <Text style={styles.donationTitle}>Bağış Bilgileri</Text>
          </View>
          <View style={styles.donationInfo}>
            <Text style={styles.donationLabel}>Banka Adı</Text>
            <Text style={styles.donationValue}>XXX Bankası</Text>
          </View>
          <View style={styles.donationInfo}>
            <Text style={styles.donationLabel}>Hesap Adı</Text>
            <Text style={styles.donationValue}>İyilik Kervanı Derneği</Text>
          </View>
          <View style={styles.donationInfo}>
            <Text style={styles.donationLabel}>IBAN</Text>
            <Text style={styles.ibanText}>TR00 0000 0000 0000 0000 0000 00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[50],
  },
  header: {
    backgroundColor: Colors.primary,
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.9,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 14,
    color: Colors.gray[700],
    lineHeight: 22,
    marginBottom: 12,
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.secondary,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: Colors.gray[600],
    lineHeight: 20,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactContent: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 12,
    color: Colors.gray[500],
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.secondary,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donationCard: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.primary + '30',
  },
  donationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  donationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  donationInfo: {
    marginBottom: 16,
  },
  donationLabel: {
    fontSize: 12,
    color: Colors.gray[500],
    marginBottom: 4,
  },
  donationValue: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.secondary,
  },
  ibanText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'monospace',
    color: Colors.secondary,
    backgroundColor: Colors.gray[100],
    padding: 12,
    borderRadius: 8,
  },
})
