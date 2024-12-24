import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events | TVRAN',
  description: 'TVRAN is a community of people who loves sports and want to improve their skills.',
  keywords: [
    'TVRAN',
    'Sports',
    'Competition',
    'Tournament',
    'Gaming',
    'Esports',
    'Events',
  ],
  openGraph: {
    title: 'Events | TVRAN',
    description: 'TVRAN is a community of people who loves sports and want to improve their skills.',
    url: 'https://tvran.vercel.app/events',
    siteName: 'TVRAN',
    images: [
      {
        url: 'https://tvran.vercel.app/img/tvranLogo.png',
        alt: 'TVRAN Logo',
      },
    ],
  },
}
export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      {children}
    </main>
  );
}
