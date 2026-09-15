import type { Metadata, Viewport } from "next";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kishor® Studio — Conversion-First Design & Development Studio",
  description:
    "We align strategy, design, and engineering into a single high-performance loop. Your vision, executed with surgical precision and conversion-first logic.",
  keywords: [
    "design studio",
    "web design",
    "development",
    "conversion",
    "branding",
  ],
  openGraph: {
    title: "Kishor® Studio — Conversion-First Design & Development Studio",
    description:
      "Strategy before pixels. We build websites where moving forward feels obvious, natural, and impossible to overthink.",
    type: "website",
    siteName: "Kishor® Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishor® Studio",
    description: "Conversion-first design & dev studio.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
