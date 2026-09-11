export type IconName =
  | "arrow"
  | "arrowUp"
  | "shield"
  | "bolt"
  | "layers"
  | "check"
  | "menu"
  | "close"
  | "factory"
  | "building"
  | "sun"
  | "tower"
  | "home"
  | "phone"
  | "mail"
  | "pin"
  | "message"
  | "plus"
  | "ground"
  | "target";
const paths: Record<IconName, string> = {
  arrow: "M4 12h16m-6-6 6 6-6 6",
  arrowUp: "M6 18 18 6M6 6h12v12",
  shield: "M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3ZM8 12l3 3 5-6",
  bolt: "m13 2-9 12h7l-1 8 10-13h-7l0-7Z",
  layers: "m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5",
  check: "m5 12 4 4L19 6",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "m6 6 12 12M6 18 18 6",
  factory: "M3 21V10l6 3V8l6 4V3h4l2 18H3ZM7 17h1m4 0h1m4 0h1",
  building:
    "M5 21V3h14v18M2 21h20M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M10 21v-3h4v3",
  sun: "M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  tower:
    "m7 22 5-13 5 13M9 17h6M12 8v1M8 5a6 6 0 0 0 0 8m8-8a6 6 0 0 1 0 8M5 2a10 10 0 0 0 0 14M19 2a10 10 0 0 1 0 14",
  home: "m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7",
  phone:
    "M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4c0 2-3 3-5 2A19 19 0 0 1 3 8c-1-2 0-5 2-5Z",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  message:
    "M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 1 1 19 0ZM7 11h.01M12 11h.01M17 11h.01",
  plus: "M12 5v14M5 12h14",
  ground: "M12 2v11M3 13h18M6 17h12M9 21h6",
  target: "M21 12a9 9 0 1 1-9-9M17 12a5 5 0 1 1-5-5M12 12l9-9m-5 0h5v5",
};
export function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
