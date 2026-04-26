const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yisak-gezahegn.vercel.app";

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/cv`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    }
  ];
}
