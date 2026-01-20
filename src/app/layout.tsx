import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "greek"],
});

export const metadata: Metadata = {
  title: "AI Landing Page Course | WEDOHYPE",
  description: "Χτίσε τη Landing Page που θα σου φέρει 2x Πωλήσεις με τη δύναμη του AI. Το μοναδικό σύστημα στην Ελλάδα που σου δείχνει πώς να χτίζεις Πωλησιακές Landing Pages.",
  keywords: "landing page, AI, course, WEDOHYPE, πωλήσεις, conversion, marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
