import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tvaran",
  description: "Tvaran is a sports website",
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
    title:  'TVRAN',
    description: 'TVRAN is a community of people who loves sports and want to improve their skills.',
    url: 'https://www.tvaran.org.in/',
    siteName: 'TVRAN',
    images: [
      {
        url: 'https://www.tvaran.org.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FtvranLogo.f4b3f304.png&w=640&q=75',
        alt: 'TVRAN Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
     
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      >
         <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
