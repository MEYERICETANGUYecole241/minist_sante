<<<<<<< HEAD
=======
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/utilisateur/Footer";
>>>>>>> 876a674 (footer)
import "./globals.css";
import Navbar from "@/components/utilisateur/Navbar";
import Footer from "@/components/utilisateur/Footer";





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
=======
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      >
        {children}
        <Footer />
        </body>
>>>>>>> 876a674 (footer)
    </html>
  );
}