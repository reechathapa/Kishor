import { CLIENTS } from "@/data/content";

function ClientMark({ name }: { name: string }) {
  switch (name) {
    case "Watchtower":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="10" r="3.4" fill="currentColor" />
        </svg>
      );
    case "Asterisk":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M12 1 V23 M1 12 H23 M4 4 L20 20 M20 4 L4 20" />
        </svg>
      );
    case "Shutterframe":
      return (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" aria-hidden="true">
          <path d="M9 0 L18 5 L18 15 L9 20 L0 15 L0 5 Z M9 5 L4.5 7.5 L4.5 12.5 L9 15 L13.5 12.5 L13.5 7.5 Z" fillRule="evenodd" />
        </svg>
      );
    case "Visionwork":
      return (
        <svg width="26" height="16" viewBox="0 0 26 16" fill="currentColor" aria-hidden="true">
          <path d="M0 0 L8 0 L4 16 L0 16 Z" opacity="0.55" />
          <path d="M10 0 L26 0 L22 16 L6 16 Z" />
        </svg>
      );
    case "PictelAI":
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 0 L14 6 L20 10 L14 14 L10 20 L6 14 L0 10 L6 6 Z" opacity="0.85" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="3.4" />
          <path d="M16 16 L21 21" stroke="currentColor" strokeWidth="3.4" />
        </svg>
      );
  }
}

export function Band() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div className="band marquee" aria-label="Clients">
      <div className="marquee-track">
        {items.map((c, i) => (
          <div className="band-cell" key={`${c}-${i}`}>
            <span className="band-logo">
              <ClientMark name={c} />
              {c !== "Asterisk" && c !== "Quanta" && c}
              {(c === "Asterisk" || c === "Quanta") && (
                <span className="sr-only">{c}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
