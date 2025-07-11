import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tamo Junto - Authentication",
  description: "Authentication with NextAuth.js and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${beVietnamPro.variable} ${beVietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
