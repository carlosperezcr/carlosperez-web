const paths = {
  upRight: "M5 19 19 5M7 5h12v12",
  right: "M4 12h16m-7-7 7 7-7 7",
  downRight: "M5 5l14 14M19 7v12H7",
  down: "M12 4v16m-7-7 7 7 7-7",
  left: "M20 12H4m7 7-7-7 7-7",
};

export default function ArrowIcon({
  direction = "upRight",
  size = 18,
  className = "",
}) {
  return (
    <svg
      className={`cp-arrow-icon ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[direction] ?? paths.upRight} />
    </svg>
  );
}
