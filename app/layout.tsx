import type { Metadata, Viewport } from "next";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kishor.studio"),
  title: "Kishor® Studio — Conversion-First Design & Development Studio",
  description:
    "Kishor® Studio is a design and development studio building conversion-focused websites — strategy, interface design, and front-end engineering under one roof.",
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
      "Structure before surface. We build websites where the next step feels obvious and nothing gets in the visitor's way.",
    type: "website",
    siteName: "Kishor® Studio",
    images: [{ url: "/img/hero-bg.jpg", width: 1600, height: 900 }],
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
      <body>
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
