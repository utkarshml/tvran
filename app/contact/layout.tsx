import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | TVRAN',
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
    title: 'Contact Us | TVRAN',
    description: 'TVRAN is a community of people who loves sports and want to improve their skills.',
    url: 'https://www.tvaran.org.in/contact',
    siteName: 'TVRAN',
    images: [
      {
        url: 'https://www.tvaran.org.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtvranLogo.f4b3f304.png&w=640&q=75',
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
