import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const roxboroughRegular = localFont({
  src: "../public/fonts/RoxboroughCF-Thin.otf",
  variable: "--font-rox-reg",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selsfera",
  description: "Wyjazdy i wydarzenia rozwojowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${montserrat.className} ${roxboroughRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
