export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Axvia",
  description:
    "Axvia is a platform for developers to collaborate and build projects together.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Project",
      href: "/project",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/codernotme/AlgoMitra",
    sponsor: "https://buymeacoffee.com/codernotme",
  },
};
