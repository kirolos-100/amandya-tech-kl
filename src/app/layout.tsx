import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Amandya Tech | Smart Interactive Photobooth Software System",
  description: "Revolutionize your photobooth business with Amandya Tech's interactive software. Featuring Live Mode, Dual Camera, automated consent forms, and a centralized cloud management dashboard.",
  keywords: ["Photobooth Software", "Interactive Photobooth", "Amandya Tech", "Live Gallery Photobooth", "Photobooth Automation", "Digital Consent"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amandya.tech",
    siteName: "Amandya Tech",
    title: "Amandya Tech | Next-Gen Photobooth Software",
    description: "The most flexible all-in-one photobooth system for modern operators.",
    images: [{ url: "/og-image.jpg" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Amandya Tech | Next-Gen Photobooth Software",
    description: "The most seamless all-in-one photobooth system for modern operators.",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SmoothScroll>
            <main className="min-h-screen pt-24">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
