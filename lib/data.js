export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const skills = {
  "Frontend Development": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "React.js (Currently Learning)"
  ],
  "Backend & Server": ["PHP", "Python", "Java"],
  "Database Architecture": ["MySQL", "PostgreSQL", "pgAdmin", "PDO (PHP Data Objects)"],
  "Tools & Deployment": [
    "Git",
    "GitHub",
    "XAMPP",
    "InfinityFree Hosting",
    "Live Server Migration",
    "Formspree Integration"
  ]
};

export const projects = [
  {
    title: "Ethio Food",
    role: "Lead Developer",
    techStack: ["PHP", "MySQL", "Bootstrap", "InfinityFree"],
    description:
      "Built and deployed a food ordering web platform focused on smooth ordering flow, responsive UI, and reliable backend connectivity for everyday user interactions.",
    githubUrl: "https://github.com/YisakGezahegn",
    liveUrl: "https://ethiofood.infinityfree.me/",
    image: "/images/project-ethiofood.png"
  },
  {
    title: "KHCFF Website",
    role: "Full Stack Developer",
    techStack: ["PHP", "MySQL", "HTML/CSS", "Bootstrap"],
    description:
      "Designed and launched a dynamic organizational website with structured content sections, database-driven pages, and mobile-first layout optimized for public access.",
    githubUrl: "https://github.com/YisakGezahegn",
    liveUrl: "https://hukhcff.infinityfree.me/",
    image: "/images/project-khcff.png"
  }
];
