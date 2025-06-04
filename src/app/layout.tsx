<<<<<<< HEAD
import "./globals.css";
import Navbar from "@/components/utilisateur/Navbar";
import Footer from "@/components/utilisateur/Footer";
=======
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/utilisateur/Footer";
import "./globals.css";
import StatsSection from "@/components/sections/StatsSection";
>>>>>>> 84b41bd2d79a48f183644971efb1208077b633a8




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
     <html lang="fr">
      <body>
        <Navbar />
        <main>
         {children}
        </main>
        <Footer />
      </body>
     </html>
=======
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        {children}
        <StatsSection />
        <Footer />
        </body>
    </html>
>>>>>>> 84b41bd2d79a48f183644971efb1208077b633a8
  );
}