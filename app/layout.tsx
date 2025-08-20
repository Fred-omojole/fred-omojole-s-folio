import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],

  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Fred-Omojole Omoyele ",
  description: "Portfolio to showcase my impact on businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} antialiased`}>{children}</body>
    </html>
  );
}
