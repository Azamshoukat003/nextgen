import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Work_Sans as WorkSans, Open_Sans as OpenSans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const workSans = WorkSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const openSans = OpenSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "NextGen Soluion- E-commerce Growth & Online Advertising",
  description:
    "Expert Shopify design, WordPress development, product optimization, and Meta/Google ads management to grow your e-commerce business.",
  generator: "azam",
  icons: {
    icon: "/favicon.jpeg", // or PNG
    shortcut: "/favicon.jpeg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${openSans.variable} antialiased`}
    >
      <body className="font-sans">
        <ThemeProvider
          // attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
