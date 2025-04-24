// app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ButtonWsp } from "@/components/ui/buttonWsp/ButtonWsp"; 
import 'swiper/css';


const playfair = Playfair_Display({
  variable: "--font-in-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-in-poppins",
  subsets: ["latin"],
  weight: ["500", "400"]
});

export const metadata: Metadata = {
  title: "Inaesthetics | Estética Natural y Bienestar en Lima",
  description: "Tratamientos estéticos seguros y naturales en Inaesthetics. Técnicas no invasivas con equipo médico especializado. Belleza y bienestar en un solo lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}
      >
          <ButtonWsp />
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
