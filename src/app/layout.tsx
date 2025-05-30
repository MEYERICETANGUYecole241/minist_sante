<<<<<<< HEAD
=======
import type { Metadata } from "next";
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
import "./globals.css";
import Navbar from "@/components/utilisateur/Navbar";

>>>>>>> 82f9253 (Navebaré)


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
    <html lang="fr">
      <body >
        <Navbar />
        <main>
        {children}
        </main>
      </body>
>>>>>>> fcbb749 (Navebaré)
>>>>>>> 82f9253 (Navebaré)
    </html>
  );
}