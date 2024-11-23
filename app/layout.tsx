import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Integrity Circle",
  description: "A platform dedicated to promoting transparency, accountability, and collaboration in public sector initiatives.",
  keywords: "government, integrity, transparency, accountability, public sector, projects, collaboration",
  robots: "index, follow",
};
import components from "@/components";
const { Header, Footer, ReturnToTop } = components;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Header />
        {children}
        <ReturnToTop/>
        <Footer />
      </body>
    </html>
  );
}
