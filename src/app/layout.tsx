import "./globals.css";
import Navbar from "@/components/utilisateur/Navbar";
import Footer from "@/components/utilisateur/Footer";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="fr">
      <body className={openSans.className}>
        <Navbar />
        <main>
         {children}
        </main>
        <Footer />
      </body>
     </html>
  );
}