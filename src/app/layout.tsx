import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Wolf Rent a Car | Alquiler de Vehículos en Colombia",
  description:
    "Alquiler de autos y camionetas en Bogotá, Medellín, Cali, Cartagena, Barranquilla y Pereira. Servicio profesional y confiable. Wolf Renta Car SAS.",
  keywords:
    "alquiler de carros, renta de vehículos, rent a car Colombia, alquiler Bogotá, alquiler Medellín, Wolf Rent a Car",
  openGraph: {
    title: "Wolf Rent a Car | Alquiler de Vehículos en Colombia",
    description:
      "Empresa dedicada a la renta de vehículos particulares en las principales ciudades de Colombia.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  themeColor: "#11161C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800;900&family=Rubik:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
