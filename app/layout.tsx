import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Cloud, Fog, and Edge Computing Presentation',
  description: 'An overview of Cloud, Fog, and Edge computing, exploring their definitions, tools, differences, and hierarchy.',
  openGraph: {
    title: 'Cloud, Fog, and Edge Computing Presentation',
    description: 'An overview of Cloud, Fog, and Edge computing, exploring their definitions, tools, differences, and hierarchy.',
    type: 'website',
    url: 'https://your-presentation-url.com/', // Placeholder
    images: [
      {
        url: 'https://your-domain.com/path-to-your-og-image.png', // Placeholder
        // alt: 'Cloud, Fog, and Edge Computing Presentation Preview', // Optional: add alt text
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
