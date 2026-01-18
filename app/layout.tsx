import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter_VF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});
const spaceGrotesk = localFont({
  src: "./fonts/spaceGrotesk_VF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "DevFlow is a collaborative developer platform where engineers ask questions, share knowledge, and solve real-world problems. Engage with AI-powered answers, collaborate in live coding meeting rooms with screen sharing, and learn modern development topics including Data Structures & Algorithms, Next.js full-stack development, backend systems, AI engineering, and scalable system design.",
  icons: {
    icon: "../public/images/site-logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
}
