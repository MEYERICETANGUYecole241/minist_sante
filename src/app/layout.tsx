<<<<<<< HEAD
=======
import type { Metadata } from "next";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/utilisateur/Footer";
<<<<<<< HEAD
>>>>>>> 876a674 (footer)
=======
import CompaingsSection from "@/components/sections/CompaingsSection";
<<<<<<< HEAD
>>>>>>> a0e9dea (compaings)
import "./globals.css";
<<<<<<< HEAD
import Navbar from "@/components/utilisateur/Navbar";
import Footer from "@/components/utilisateur/Footer";

=======
import MobileMenu from "@/components/utilisateur/MobileMenu"
>>>>>>> 721dcf3 (menu burger)


=======
=======
>>>>>>> fcbb749 (Navebaré)
=======
=======
>>>>>>> 480ac9e (Navebaré)
=======
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/utilisateur/Footer";
>>>>>>> 876a674 (footer)
>>>>>>> b3d990c (footer)
import "./globals.css";
<<<<<<< HEAD
import Navbar from "@/components/utilisateur/Navbar";
=======
import MobileMenu from "@/components/utilisateur/MobileMenu"
>>>>>>> bebac7d (menu burger)
=======
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/utilisateur/Footer";
=======
>>>>>>> fcbb749 (Navebaré)
import "./globals.css";
import Navbar from "@/components/utilisateur/Navbar";
>>>>>>> ed88f5f (Navebaré)

>>>>>>> 82f9253 (Navebaré)


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 82f9253 (Navebaré)
=======
>>>>>>> ab725ee (footer)
=======
>>>>>>> cc6f446 (Navebaré)
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
<<<<<<< HEAD

      >
=======
      > <MobileMenu />
>>>>>>> eb0499e (menu burger)
        {children}
        <CompaingsSection/>
        <Footer />
        </body>
<<<<<<< HEAD
>>>>>>> 876a674 (footer)
=======
=======
=======
>>>>>>> b3d990c (footer)
=======
>>>>>>> 480ac9e (Navebaré)
    <html lang="fr">
      <body >
        <Navbar />
        <main>
        {children}
        </main>
      </body>
<<<<<<< HEAD
>>>>>>> fcbb749 (Navebaré)
<<<<<<< HEAD
>>>>>>> 82f9253 (Navebaré)
=======
=======
=======
=======
>>>>>>> ed88f5f (Navebaré)
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
<<<<<<< HEAD

      >
=======
      > <MobileMenu />
>>>>>>> eb0499e (menu burger)
        {children}
        <Footer />
        </body>
<<<<<<< HEAD
>>>>>>> 876a674 (footer)
<<<<<<< HEAD
>>>>>>> b3d990c (footer)
<<<<<<< HEAD
>>>>>>> ab725ee (footer)
=======
=======
=======
=======
    <html lang="fr">
      <body >
        <Navbar />
        <main>
        {children}
        </main>
      </body>
>>>>>>> fcbb749 (Navebaré)
>>>>>>> ed88f5f (Navebaré)
>>>>>>> 480ac9e (Navebaré)
>>>>>>> cc6f446 (Navebaré)
    </html>
  );
}