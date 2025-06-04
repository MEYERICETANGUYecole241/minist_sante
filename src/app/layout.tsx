import "./globals.css";
import Navbar from "@/components/utilisateur/Navbar";
import Footer from "@/components/utilisateur/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="fr">
      <body>
        <Navbar />
        <main>
         {children}
        </main>
        <Footer />
      </body>
     </html>
  );
}