import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import FluidGradient from "@/components/FluidGradient";

export const metadata: Metadata = {
  title: "IBA Computer Science Society",
  description: "Computer Science Society Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
