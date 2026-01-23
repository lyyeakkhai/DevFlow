import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ReactNode } from "react";

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
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  // fetch data from the sever and pass it to the sessionProvide which is client component that allow to use session data every where by using useSession for the auth.js package
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <SessionProvider session={session}> 
        <body className={`${inter.className} ${spaceGrotesk.variable} antialiased`}>
          <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}

export default RootLayout;
