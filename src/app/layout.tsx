import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import AnimatedCursor from "@/components/AnimatedCursor";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Musfika Rahman Bushra | MERN Stack Developer",
  description: "MERN + Next.js Developer building fast and beautiful web applications. Portfolio showcasing modern web development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AnimatedBackground />
        <ScrollProgress />
        <SmoothScrollProvider>
          <AnimatedCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
