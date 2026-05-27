import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://smart-class-attendance.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Smart Class',
    template: 'Smart Class | %s',
  },
  description: 'Next-gen AI-powered biometric attendance system using FaceID and VoiceID technology',
  keywords: [
    'Smart Class',
    'biometric attendance',
    'AI attendance',
    'Face recognition',
    'Voice recognition',
    'edtech',
  ],
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Smart Class',
    description: 'Next-gen AI-powered biometric attendance system using FaceID and VoiceID technology',
    url: 'https://smart-class-attendance.vercel.app',
    siteName: 'Smart Class',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Smart Class - AI Biometric Attendance System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Class',
    description: 'Next-gen AI-powered biometric attendance system using FaceID and VoiceID technology',
    images: ['/images/og-cover.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a1a" />
      </head>
      <body className="bg-black text-white selection:bg-white/20 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

