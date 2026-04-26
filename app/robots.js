const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yisak-gezahegn.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
