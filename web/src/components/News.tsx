'use client'

import { Calendar, ArrowRight } from 'lucide-react'

export default function News() {
  // Sample news data - will be replaced with Supabase data
  const news = [
    {
      id: 1,
      title: 'Ramazan Ayı Yardım Kampanyası Başladı',
      description: 'Bu mübarek ayda 500 aileye gıda kolisi ulaştırıyoruz. Siz de bağışlarınızla bu güzel kampanyaya destek olabilirsiniz.',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Öğrencilere Eğitim Desteği',
      description: '100 öğrenciye kırtasiye ve ders materyali yardımı yapıldı. Eğitim hayatlarına destek olmaya devam ediyoruz.',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Kış Aylarında Giyim Yardımı',
      description: 'İhtiyaç sahibi ailelere kışlık giyim yardımı ulaştırıldı. Toplam 200 aileye ulaştık.',
      date: '2024-02-28',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop',
    },
  ]

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Haberler
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mt-4 mb-6">
            Son Gelişmeler
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(item.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Read More Link */}
                <a
                  href={`#news-${item.id}`}
                  className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                >
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#all-news"
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Tüm Haberleri Gör
          </a>
        </div>
      </div>
    </section>
  )
}
