import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HTR Systems | Software Company",
  description:
    "Custom Web, Mobile & AI Solutions for Growing Businesses. From idea to launch — we handle everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <Navbar />
        <main className="pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
