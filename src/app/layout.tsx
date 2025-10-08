import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "The Firm - Building the Future of Gaming Communities",
  description: "Join The Firm's immersive roleplay community. Experience dynamic economy, player-led ventures, and premium gaming experiences.",
  keywords: "gaming, roleplay, community, The Firm, multiplayer, server",
  authors: [{ name: "The Firm" }],
  openGraph: {
    title: "The Firm - Building the Future of Gaming Communities",
    description: "Join The Firm's immersive roleplay community. Experience dynamic economy, player-led ventures, and premium gaming experiences.",
    type: "website",
    siteName: "The Firm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-dark-bg text-foreground">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
