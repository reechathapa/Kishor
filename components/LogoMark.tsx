export function LogoMark({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 46"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M20 0 L38 0 L18 46 L0 46 Z" fill={color} />
      <path d="M50 0 L68 0 L48 46 L30 46 Z" fill={color} />
      <path d="M80 0 L98 0 L78 46 L60 46 Z" fill={color} />
    </svg>
  );
}
