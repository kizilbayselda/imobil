'use client'

import { Play } from 'lucide-react'

export default function Videos() {
  // Sample video data - will be replaced with Supabase data
  const videos = [
    {
      id: 1,
      title: 'Ramazan Ayı Yardımları 2024',
      thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      duration: '3:45',
    },
    {
      id: 2,
      title: 'Öğrencilere Kırtasiye Desteği',
      thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
      duration: '2:30',
    },
    {
      id: 3,
      title: 'Dernek Tanıtım Filmi',
      thumbnail: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop',
      duration: '5:20',
    },
  ]

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Videolar
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mt-4 mb-6">
            Faaliyetlerimiz
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
