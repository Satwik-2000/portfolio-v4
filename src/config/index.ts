import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Satwik Ghosh — Mobile & Web Developer",
  author: "Satwik Ghosh",
  description:
    "Software Engineer based in Kolkata, India. I specialize in backend, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/IamSatwikGhosh" },
    { text: "LinkedIn", href: "www.linkedin.com/in/satwikghosh" },
    { text: "Github", href: "https://github.com/Satwik-2000" },
    // { text: "Youtube", href: "" },
    // { text: "Dribbble", href: "" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Satwik Ghosh",
    specialty: "Mobile & Web Developer",
    summary:
      "Software Engineer based in Kolkata, India. I specialize in backend, web and mobile application development and maintenance.",
    email: "satwikghosh2000@gmail.com",
  },
  experience: [
    {
      company: "Feliz Health",
      position: "Software Engineer",
      startDate: "June 2025",
      endDate: "Present",
      summary: [
        "Get instant doctor at home Kolkata, book ambulances, schedule lab tests, and manage your health – all in one app",
        "The app empowers you to access our comprehensive healthcare services conveniently and efficiently. Designed to bring care closer to home. Here’s how we make your health our priority"
      ],
    },
    {
      company: "StockEdge",
      position: "Junior Software Engineer",
      startDate: "August 2021",
      endDate: "May 2025",
      summary: [
        "Reduced search query latency by 50% by implementing PostgreSQL materialized views and Redis caching, leading to smoother user experience across the platform",
        "Led development of critical backend services using Node.js, PostgreSQL, and Redis, supporting over 100K daily active users and 20K+ concurrent sessions",
      ],
    }
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Satwik Ghosh, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
