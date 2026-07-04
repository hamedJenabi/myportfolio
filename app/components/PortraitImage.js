export default function PortraitImage() {
  return (
    <div className="portrait-image-shell">
      <div className="portrait-placeholder" aria-hidden="true" />
      <img
        src="/me.png"
        alt="Portrait of Hamed Jenabi"
        width="640"
        height="640"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
