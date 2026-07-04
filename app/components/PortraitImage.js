"use client";

import { useState } from "react";

export default function PortraitImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`portrait-image-shell${loaded ? " is-loaded" : ""}`}>
      <div className="portrait-placeholder" aria-hidden="true" />
      <img
        src="/me.png"
        alt="Portrait of Hamed Jenabi"
        width="640"
        height="640"
        decoding="async"
        fetchPriority="high"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
