import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space wallpapers",
  description:
    "Get random space wallpapers from unsplash api. Download high quality images for free.",
  category: "wallpapers",
  keywords: ["space", "wallpapers", "unsplash"],
  bookmarks: ["space", "wallpapers", "unsplash"],
  publisher: "github.com/vojmax",
  icons: "icon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
