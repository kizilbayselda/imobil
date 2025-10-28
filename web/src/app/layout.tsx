import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'İyilik Kervanı Derneği - 2009\'dan Beri Umut Oluyoruz',
  description: 'İyilik Kervanı Derneği, sosyal yardımlaşmayı ve dayanışmayı teşvik eden bir sivil toplum kuruluşudur. 2009\'dan beri ihtiyaç sahiplerinin yanındayız.',
  keywords: 'iyilik kervanı, dernek, yardım, bağış, sosyal yardımlaşma, gebze',
  authors: [{ name: 'İyilik Kervanı Derneği' }],
  openGraph: {
    title: 'İyilik Kervanı Derneği',
    description: '2009\'dan beri ihtiyaç sahiplerinin yanında',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
