import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mario Maker - Classic Mario Game with Level Editor',
  description: 'Classic Mario Game with Level-Editor made using Next.js and HTML5 canvas. Create your own levels and play or simply play the pre-built levels.',
  viewport: 'width=1280',
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
