import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";

const sfPRO = localFont({
  src: "./fonts/SF-Pro-Display-Heavy.woff2",
  variable: "--font-sfpro",
  display: "swap",
});

const vazir = localFont({
  src: "./fonts/Vazir.woff2",
  variable: "--font-vazir",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shexon",
  description: "Share experience online",
  icons: {
    icon: "/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          roboto.className,
          vazir.variable,
          sfPRO.variable,
          inter.variable,
          "bg-primary-99 relative"
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
