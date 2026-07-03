import "./globals.css";

export const metadata = {
  title: "Hamed Jenabi - Software Engineer",
  description:
    "Hamed Jenabi is a team lead and software engineer specializing in CMS, DXP, design systems, frontend, headless CMS, and AI integrations.",
  keywords: [
    "Hamed Jenabi",
    "team lead",
    "software engineer",
    "frontend engineer",
    "CMS",
    "DXP",
    "design systems",
    "headless CMS",
    "AI integrations",
    "React",
    "Next.js",
  ],
  icons: {
    icon: "/smile.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
