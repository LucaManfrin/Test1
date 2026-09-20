export interface SiteConfig {
  url: string;
  title: string;
  description: string;
  author: string;
  authorTitle: string;
  lang: string;
}

export const SITE: SiteConfig = {
  url: "https://blueteamzone.com",
  title: "0xLuca // notes",
  description:
    "A personal cyber security notebook: practical write-ups on Windows, Active Directory, Linux, macOS, Threat Hunting and Security Tools. No fluff, no trackers, just signal.",
  author: "Luca Manfrin",
  authorTitle: "Cyber Security Specialist",
  lang: "en",
};

export const SOCIAL = {
  github: "https://github.com/LucaManfrin",
  linkedin: "https://www.linkedin.com/in/lucamanfrin--",
  credly: "https://www.credly.com/users/luca-manfrin.600e2ebe",
};

export const CATEGORIES = [
  { slug: "windows", label: "Windows" },
  { slug: "active-directory", label: "Active Directory" },
  { slug: "linux", label: "Linux" },
  { slug: "macos", label: "macOS" },
  { slug: "threat-hunting", label: "Threat Hunting" },
  { slug: "tools", label: "Security Tools" },
];

export const POSTS_PER_PAGE = 10;
