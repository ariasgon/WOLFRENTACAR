import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Wolf Rent a Car | Alquiler de carros en Bogotá",
  description:
    "Alquiler de carros en Bogotá con entrega en El Dorado y la zona norte. Seguro incluido, sin letra chica. Wolf Renta Car SAS.",
  keywords:
    "alquiler de carros Bogotá, renta de vehículos Bogotá, rent a car Bogotá, alquiler aeropuerto El Dorado, Wolf Rent a Car",
  openGraph: {
    title: "Wolf Rent a Car | Alquiler de carros en Bogotá",
    description:
      "Alquiler de carros particulares en Bogotá. Servicio profesional, seguro incluido y atención por WhatsApp.",
    type: "website",
    locale: "es_CO",
  },
};

export const viewport: Viewport = {
  themeColor: "#11161C",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "";
  const isAdmin = pathname.startsWith("/admin");

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {isAdmin ? (
          children
        ) : (
          <>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </>
        )}
      </body>
    </html>
  );
}
