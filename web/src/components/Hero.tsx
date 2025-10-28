'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            İyilik Kervanı Derneği
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            2009&apos;dan beri umut olmaya devam ediyoruz
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">Yıllık Deneyim</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80">Mutlu Yüz</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Proje</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition-all transform hover:scale-105"
            >
              Hakkımızda
            </a>
            <a
              href="#donate"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Bağış Yap
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  )
}
