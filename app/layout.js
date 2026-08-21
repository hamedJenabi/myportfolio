import "./globals.css";

const siteUrl = "https://hamedjenabi.me";

const brandExpressionScript = `
try {
  var brand = window.localStorage.getItem("portfolio-brand-expression");
  var resolvedBrand = brand === "product" ? "product" : "terminal";
  document.documentElement.dataset.brand = resolvedBrand;
  document.documentElement.style.colorScheme =
    resolvedBrand === "product" ? "light" : "dark";
} catch (error) {
  document.documentElement.dataset.brand = "terminal";
}
`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Hamed Jenabi Portfolio",
  title: {
    default: "Hamed Jenabi | Design Systems & Frontend Platform Lead",
    template: "%s | Hamed Jenabi",
  },
  description:
    "Design systems expert and frontend platform lead building token-driven React, Next.js, TypeScript, headless CMS, and AI-enabled product experiences.",
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
  authors: [{ name: "Hamed Jenabi", url: siteUrl }],
  creator: "Hamed Jenabi",
  publisher: "Hamed Jenabi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hamed Jenabi Portfolio",
    title: "Hamed Jenabi | Design Systems & Frontend Platform Lead",
    description:
      "A live token-driven portfolio for design systems, frontend platforms, multibrand UI, and AI-enabled product engineering.",
    images: [
      {
        url: "/me.png",
        width: 640,
        height: 640,
        alt: "Portrait of Hamed Jenabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamed Jenabi | Design Systems & Frontend Platform Lead",
    description:
      "Token-driven design systems, frontend platforms, and multibrand product UI.",
    images: ["/me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/smile.png",
    shortcut: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0a" },
    { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      data-brand="terminal"
      lang="en"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body>
        <script
          id="brand-expression-script"
          dangerouslySetInnerHTML={{ __html: brandExpressionScript }}
        />
        {children}
      </body>
    </html>
  );
}
