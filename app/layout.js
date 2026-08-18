import "./globals.css";

export const metadata = {
  title: "Hamed Jenabi - Design Systems Expert & Frontend Platform Lead",
  description:
    "Design Systems Expert and Frontend Platform Lead specializing in React, Next.js, TypeScript, component architecture, design tokens, headless CMS architecture, and AI-enabled products.",
  keywords: [
    "Hamed Jenabi",
    "Design Systems Expert",
    "Design Systems Lead",
    "Design System Architect",
    "Frontend Platform Engineer",
    "Staff Frontend Engineer",
    "Frontend Architect",
    "React Architect",
    "Next.js Engineer",
    "Component Architecture",
    "Design Tokens",
    "Headless CMS Architect",
    "AI Product Engineer",
    "AI Solutions Engineer",
    "Applied AI",
    "React",
    "Next.js",
    "TypeScript",
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
