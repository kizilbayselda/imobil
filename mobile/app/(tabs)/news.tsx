import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default function NewsScreen() {
  // Sample news data - will be replaced with API data
  const news = [
    {
      id: 1,
      title: 'Ramazan Ayı Yardım Kampanyası Başladı',
      description: 'Bu mübarek ayda 500 aileye gıda kolisi ulaştırıyoruz.',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400',
    },
    {
      id: 2,
      title: 'Öğrencilere Eğitim Desteği',
      description: '100 öğrenciye kırtasiye ve ders materyali yardımı yapıldı.',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400',
    },
    {
      id: 3,
      title: 'Kış Aylarında Giyim Yardımı',
      description: 'İhtiyaç sahibi ailelere kışlık giyim yardımı ulaştırıldı.',
      date: '2024-02-28',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400',
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Son Gelişmeler</Text>
        <Text style={styles.headerSubtitle}>
          Faaliyetlerimizden haberdar olun
        </Text>
      </View>

      <View style={styles.newsList}>
        {news.map((item) => (
          <TouchableOpacity key={item.id} style={styles.newsCard}>
            <Image
              source={{ uri: item.image }}
              style={styles.newsImage}
              resizeMode="cover"
            />
            <View style={styles.newsContent}>
              <View style={styles.dateContainer}>
                <Ionicons name="calendar-outline" size={14} color={Colors.gray[500]} />
                <Text style={styles.dateText}>{formatDate(item.date)}</Text>
              </View>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription} numberOfLines={2}>
                {item.description}
              </Text>
              <View style={styles.readMore}>
                <Text style={styles.readMoreText}>Devamını Oku</Text>
                <Ionicons name="arrow-forward" size={16} color={Colors.primary} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  newsList: {
    padding: 16,
    gap: 16,
  },
  newsCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsImage: {
    width: '100%',
    height: 180,
    backgroundColor: Colors.gray[200],
  },
  newsContent: {
    padding: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    color: Colors.gray[500],
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 8,
    lineHeight: 24,
  },
  newsDescription: {
    fontSize: 14,
    color: Colors.gray[600],
    lineHeight: 20,
    marginBottom: 12,
  },
  readMore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
})
