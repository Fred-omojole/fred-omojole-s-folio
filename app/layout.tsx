import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

const syne = Syne({
  subsets: ["latin"],

  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: "light",
};

export const metadata: Metadata = {
  title: "Fred-Omojole Omoyele",
  description:
    "A portfolio created by Fred to showcase his impact on businesses as well as his online presence.",
  icons: {
    icon: ["/chef.png?v=4"],
    shortcut: ["/chef.png"],
  },

  generator: "Next.js",
  openGraph: {
    title: "Fred-Omojole's Portfolio",
    description:
      "A portfolio created by Fred to showcase his impact on businesses as well as his online presence.",
    url: "https://yele.vercel.app/",
    siteName: "yele.vercel.app",
    images: [
      {
        url: "https://github.com/Fred-omojole/fred-omojole-s-folio/blob/master/assets/fredshot.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Fred-Omojole's Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fred-Omojole's Portfolio",
    description:
      "A portfolio created by Fred to showcase his impact on businesses as well as his online presence.",
    creator: "Freddy's Space — Frontend Engineer",
    creatorId: "omoyele60762",
    images: [
      "https://github.com/Fred-omojole/fred-omojole-s-folio/blob/master/assets/fredshot.png?raw=true",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category:
    "technology, portfolio, web development,frontend, developer, software, engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
