import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRO PEOPLE",
  description:
    "Community organization website frontend for Ukraine with landing page, featured news, blog feed, and admin shell.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
