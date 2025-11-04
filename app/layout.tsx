import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mario Maker - Classic Mario Game with Level Editor',
  description: 'Classic Mario Game with Level-Editor made using Next.js and HTML5 canvas. Create your own levels and play or simply play the pre-built levels.',
  themeColor: '#5c94fc',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
