export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const skills = {
  "Frontend Development": {
    emoji: "🎨",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-400/20",
    items: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React.js", icon: "⚛️" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "Tailwind CSS", icon: "💨" }
    ]
  },
  "Backend & Server": {
    emoji: "⚙️",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-400/20",
    items: [
      { name: "PHP", icon: "🐘" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "Node.js", icon: "🟢" },
      { name: "REST APIs", icon: "🔗" }
    ]
  },
  "Desktop & Mobile": {
    emoji: "🖥️",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-400/20",
    items: [
      { name: "Electron.js", icon: "⚡" },
      { name: "Cross-platform Apps", icon: "📱" }
    ]
  },
  "Database Architecture": {
    emoji: "🗄️",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-400/20",
    items: [
      { name: "MySQL", icon: "🐬" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "pgAdmin", icon: "🛠️" },
      { name: "PDO (PHP Data Objects)", icon: "🔐" },
      { name: "SQLite", icon: "💾" }
    ]
  },
  "Tools & Deployment": {
    emoji: "🚀",
    color: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-400/20",
    items: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Vercel", icon: "▲" },
      { name: "Railway", icon: "🚂" },
      { name: "XAMPP", icon: "🔧" },
      { name: "InfinityFree Hosting", icon: "♾️" },
      { name: "Formspree Integration", icon: "📬" },
      { name: "VS Code", icon: "💻" },
      { name: "npm / pip", icon: "📦" }
    ]
  }
};

export const projects = [
  {
    title: "Ethio Food",
    role: "Lead Developer",
    techStack: ["PHP", "MySQL", "Bootstrap", "InfinityFree"],
    description:
      "A fully functional food ordering web platform built for Ethiopian cuisine lovers. Features a smooth ordering flow with cart management, real-time menu browsing, responsive mobile-first UI, and a reliable PHP/MySQL backend. Deployed on InfinityFree with zero downtime and optimized for everyday user interactions.",
    githubUrl: "https://github.com/Yisak-Gezahegn",
    liveUrl: "https://ethiofood.infinityfree.me/",
    image: "/images/project-ethiofood.png"
  },
  {
    title: "KHCFF Website",
    role: "Full Stack Developer",
    techStack: ["PHP", "MySQL", "HTML/CSS", "Bootstrap"],
    description:
      "A complete organizational website for BKHCFF (Bate Kale Hewot Church Family Fellowship). Built with database-driven dynamic content, structured information sections, an admin panel for content management, and a mobile-first responsive layout optimized for broad public access across devices.",
    githubUrl: "https://github.com/Yisak-Gezahegn",
    liveUrl: "https://hukhcff.infinityfree.me/",
    image: "/images/project-khcff.png"
  },
  {
    title: "FLSLPN Web Portal",
    role: "Full Stack Developer",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    description:
      "A modern web portal built for FLSLPN — a women's association empowering communities through digital presence. Features a clean, professional design with responsive layouts, dynamic content sections, and deployed on Vercel for fast global access. Focused on representing the organization's mission effectively online.",
    githubUrl: "https://github.com/Yisak-Gezahegn/flslpn-web-portal",
    liveUrl: "https://flslpn.vercel.app/",
    image: "/images/flslpn.png"
  },
  {
    title: "Holy Bible App",
    role: "Desktop App Developer",
    techStack: ["Electron.js", "JavaScript", "HTML/CSS", "SQLite"],
    description:
      "A fully offline cross-platform Holy Bible desktop application built with Electron.js. Supports multiple Bible versions, fast search across all books and chapters, bookmarking, and a clean reading interface optimized for daily use. Packaged for Windows, macOS, and Linux and distributed via GitHub Releases.",
    githubUrl: "https://github.com/Yisak-Gezahegn/holy-bible",
    liveUrl: "https://github.com/Yisak-Gezahegn/holy-bible/releases/latest",
    liveLabel: "Download App",
    image: "/images/holybible.png"
  }
];
