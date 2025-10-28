'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Ana Sayfa' },
    { href: '#about', label: 'Hakkımızda' },
    { href: '#projects', label: 'Projeler' },
    { href: '#news', label: 'Haberler' },
    { href: '#videos', label: 'Videolar' },
    { href: '#contact', label: 'İletişim' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="text-2xl font-display font-bold text-primary">
              İyilik Kervanı
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              Bağış Yap
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="block text-center px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bağış Yap
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
