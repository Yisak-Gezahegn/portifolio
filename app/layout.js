import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yisak-gezahegn.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yisak Gezahegn | Full Stack Software Engineer",
  description:
    "Personal portfolio of Yisak Gezahegn, a Full Stack Software Engineer and Computer Scientist building scalable web applications.",
  keywords: [
    "Yisak Gezahegn",
    "Full Stack Developer Ethiopia",
    "Haramaya University Computer Science",
    "Next.js Developer Ethiopia",
    "React Developer"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Yisak Gezahegn | Full Stack Software Engineer",
    description:
      "Bridging robust technical architecture with strategic management principles to build scalable web applications.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/yisak-hero-visual.svg",
        width: 1200,
        height: 630,
        alt: "Yisak Gezahegn portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yisak Gezahegn | Full Stack Software Engineer",
    description: "Explore projects, skills, and contact details of Yisak Gezahegn.",
    images: ["/images/yisak-hero-visual.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
