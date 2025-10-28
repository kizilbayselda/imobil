import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default function HomeScreen() {
  const stats = [
    { number: '15+', label: 'Yıllık Deneyim' },
    { number: '10K+', label: 'Mutlu Yüz' },
    { number: '100+', label: 'Proje' },
  ]

  const projects = [
    { icon: 'home', title: 'Çeyiz Yardımı', color: '#e91e63' },
    { icon: 'school', title: 'Burs Programı', color: '#2196f3' },
    { icon: 'restaurant', title: 'Gıda Yardımı', color: '#4caf50' },
    { icon: 'star', title: 'Özel Projeler', color: '#9c27b0' },
  ]

  const handleDonate = () => {
    // Navigate to donate screen or show modal
    console.log('Donate button pressed')
  }

  const handleCall = () => {
    Linking.openURL('tel:+90XXXXXXXXXX')
  }

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>İyilik Kervanı</Text>
          <Text style={styles.heroSubtitle}>
            2009'dan beri umut olmaya devam ediyoruz
          </Text>

          {/* Stats */}
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          {/* CTA Buttons */}
          <View style={styles.ctaContainer}>
            <TouchableOpacity style={styles.primaryButton} onPress={handleDonate}>
              <Ionicons name="heart" size={20} color={Colors.white} />
              <Text style={styles.primaryButtonText}>Bağış Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={handleCall}>
              <Ionicons name="call" size={20} color={Colors.white} />
              <Text style={styles.secondaryButtonText}>İletişim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projelerimiz</Text>
        <View style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <TouchableOpacity key={index} style={styles.projectCard}>
              <View style={[styles.projectIcon, { backgroundColor: project.color }]}>
                <Ionicons name={project.icon as any} size={28} color={Colors.white} />
              </View>
              <Text style={styles.projectTitle}>{project.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Quick Info */}
      <View style={styles.section}>
        <View style={styles.infoCard}>
          <Ionicons name="information-circle" size={24} color={Colors.primary} />
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Misyonumuz</Text>
            <Text style={styles.infoDescription}>
              İhtiyaç sahiplerine ulaşmak ve hayatlarına dokunmak
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  hero: {
    height: 400,
    backgroundColor: Colors.primary,
    position: 'relative',
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 24,
    textAlign: 'center',
    opacity: 0.9,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 100,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.white,
    opacity: 0.9,
    textAlign: 'center',
  },
  ctaContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  primaryButtonText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  secondaryButtonText: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 16,
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  projectCard: {
    width: '48%',
    backgroundColor: Colors.gray[50],
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  projectIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.secondary,
    textAlign: 'center',
  },
  infoCard: {
    flexDirection: 'row',
    backgroundColor: Colors.gray[50],
    padding: 16,
    borderRadius: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: Colors.gray[200],
  },
  infoText: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.secondary,
    marginBottom: 4,
  },
  infoDescription: {
    fontSize: 14,
    color: Colors.gray[600],
    lineHeight: 20,
  },
})
