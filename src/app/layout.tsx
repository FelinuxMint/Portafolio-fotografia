import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TinaProvider } from "tinacms/dist/dist/index";
import { tinaClient } from "@/lib/tina";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio de Fotografía – Paz Javiera",
  description: "Portafolio fotográfico de Paz Javiera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <TinaProvider client={tinaClient}>
          {children}
        </TinaProvider>
      </body>
    </html>
  );
}
