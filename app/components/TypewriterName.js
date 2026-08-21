"use client";

import { useEffect, useState } from "react";

const frames = [
  { text: "", delay: 220 },
  { text: "H", delay: 70 },
  { text: "Ha", delay: 70 },
  { text: "Ham", delay: 70 },
  { text: "Hame", delay: 70 },
  { text: "Hamed", delay: 90 },
  { text: "Hamed ", delay: 70 },
  { text: "Hamed J", delay: 70 },
  { text: "Hamed Je", delay: 70 },
  { text: "Hamed Jen", delay: 70 },
  { text: "Hamed Jena", delay: 70 },
  { text: "Hamed Jenab", delay: 90 },
  { text: "Hamed Jenabi", delay: 1200 },
];

export default function TypewriterName() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setFrame(frames.length - 1);
      return undefined;
    }

    if (frame >= frames.length - 1) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setFrame((currentFrame) => currentFrame + 1);
    }, frames[frame].delay);

    return () => window.clearTimeout(timeout);
  }, [frame]);

  return (
    <p className="typed-name" aria-label="Hamed Jenabi">
      <span aria-hidden="true">{frames[frame].text}</span>
    </p>
  );
}
