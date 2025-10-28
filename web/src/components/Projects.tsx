'use client'

import { Home, GraduationCap, Apple, Sparkles } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Çeyiz Yardımı',
      description: 'Yoksul aileleri desteklemek için çeyiz yardımları sağlıyoruz. Yeni evlenen çiftlere umut oluyoruz.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Burs Programı',
      description: 'Öğrencilere eğitim desteği sunuyoruz. Geleceğin parlak beyinlerini destekliyoruz.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Apple className="w-12 h-12" />,
      title: 'Gıda ve Giyim Yardımı',
      description: 'Zor durumdaki ailelere gıda ve giyim yardımları ulaştırıyoruz. Temel ihtiyaçları karşılıyoruz.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Özel Projeler',
      description: 'İhtiyaca göre özel projeler geliştiriyor, acil durumlarda hızlı müdahale ediyoruz.',
      color: 'from-purple-500 to-violet-500',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Projelerimiz
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mt-4 mb-6">
            Hayata Dokunuyoruz
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {project.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
              >
                Detaylı Bilgi
                <span className="ml-1">→</span>
              </a>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
