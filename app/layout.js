import "./globals.css";

export const metadata = {
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
  openGraph: {
    title: "Yisak Gezahegn | Full Stack Software Engineer",
    description:
      "Bridging robust technical architecture with strategic management principles to build scalable web applications.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
