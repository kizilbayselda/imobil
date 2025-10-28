'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      value: '+90 (XXX) XXX XX XX',
      link: 'tel:+90XXXXXXXXXX',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-posta',
      value: 'info@iyilikkervani.org',
      link: 'mailto:info@iyilikkervani.org',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adres',
      value: 'Gebze, Kocaeli, Türkiye',
      link: '#',
    },
  ]

  const socialMedia = [
    { icon: <Facebook />, link: '#', name: 'Facebook' },
    { icon: <Twitter />, link: '#', name: 'Twitter' },
    { icon: <Instagram />, link: '#', name: 'Instagram' },
    { icon: <Linkedin />, link: '#', name: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary via-primary to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
            İletişim
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-6">
            Bize Ulaşın
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              İletişim Bilgileri
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-white/70 text-sm mb-1">{info.title}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-white mb-6">
                Sosyal Medya
              </h4>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Donation Info */}
          <div id="donate" className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Bağış Bilgileri
            </h3>
            <div className="space-y-6">
              <div>
                <div className="text-white/70 text-sm mb-2">Banka Adı</div>
                <div className="text-white font-semibold text-lg">XXX Bankası</div>
              </div>
              <div>
                <div className="text-white/70 text-sm mb-2">Hesap Adı</div>
                <div className="text-white font-semibold text-lg">
                  İyilik Kervanı Derneği
                </div>
              </div>
              <div>
                <div className="text-white/70 text-sm mb-2">IBAN</div>
                <div className="text-white font-mono text-sm bg-white/10 p-4 rounded-xl border border-white/20">
                  TR00 0000 0000 0000 0000 0000 00
                </div>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm leading-relaxed">
                  Bağışlarınız, ihtiyaç sahiplerine ulaşmak için kullanılacaktır. Her türlü katkınız için teşekkür ederiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
