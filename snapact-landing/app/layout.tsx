import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* 
 * Note: Google Fonts (Inter, Outfit) via next/font are temporarily disabled 
 * due to network build issues. Uncomment if network allows.
 */

/*
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});
*/

export const metadata: Metadata = {
  title: "SnapAct - Your Intelligent Life Operating System",
  description: "SnapAct is a next-generation life management platform that transforms fragmented inputs into actionable plans using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased selection:bg-primary/30 selection:text-white font-sans`}
      >
        <div className="flex min-h-screen flex-col relative overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
