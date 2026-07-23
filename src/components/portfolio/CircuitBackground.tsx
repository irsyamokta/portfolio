export default function CircuitBackground({ 
  position = "full",
  opacity = "opacity-[0.15] dark:opacity-20"
}: { 
  position?: "left" | "right" | "full" | "top" | "bottom";
  opacity?: string;
}) {
  let maskStyle = "";

  if (position === "left") {
    maskStyle = "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)";
  } else if (position === "right") {
    maskStyle = "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 60%)";
  } else if (position === "top") {
    maskStyle = "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 60%)";
  } else if (position === "bottom") {
    maskStyle = "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)";
  } else {
    maskStyle = "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25))";
  }

  return (
    <div 
      className={`absolute inset-0 pointer-events-none text-foreground overflow-hidden ${opacity}`}
      style={{ 
        WebkitMaskImage: maskStyle,
        maskImage: maskStyle,
      }}
    >
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-board" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(3)">
            <g fill="none" stroke="currentColor" strokeWidth="0.33" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 20 h20 l20 20 h40 l20 -20" />
              <circle cx="20" cy="20" r="0.8" fill="currentColor" />
              <circle cx="40" cy="40" r="0.8" fill="currentColor" />
              <circle cx="80" cy="40" r="0.8" fill="currentColor" />

              <path d="M0 80 h30 l20 -20 h30 l20 20" />
              <circle cx="30" cy="80" r="0.8" fill="currentColor" />
              <circle cx="50" cy="60" r="0.8" fill="currentColor" />
              <circle cx="80" cy="60" r="0.8" fill="currentColor" />

              <path d="M25 0 v25 l15 15 v40 l-15 15 v5" />
              <circle cx="25" cy="25" r="0.8" fill="currentColor" />
              <circle cx="40" cy="40" r="0.8" fill="currentColor" />
              <circle cx="40" cy="80" r="0.8" fill="currentColor" />

              <path d="M75 0 v20 l-15 15 v20 l15 15 v30" />
              <circle cx="75" cy="20" r="0.8" fill="currentColor" />
              <circle cx="60" cy="35" r="0.8" fill="currentColor" />
              <circle cx="60" cy="55" r="0.8" fill="currentColor" />
              <circle cx="75" cy="70" r="0.8" fill="currentColor" />
              
              <path d="M50 0 v10 h10 v-10" />
              <circle cx="50" cy="10" r="0.5" fill="currentColor" />
              <circle cx="60" cy="10" r="0.5" fill="currentColor" />

              <path d="M0 50 h10 l10 -10 h5" />
              <circle cx="10" cy="50" r="0.5" fill="currentColor" />
              <circle cx="25" cy="40" r="0.5" fill="currentColor" />

              <path d="M90 50 v20 h10" />
              <circle cx="90" cy="50" r="0.5" fill="currentColor" />
              <circle cx="90" cy="70" r="0.5" fill="currentColor" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-board)" />
      </svg>
    </div>
  );
}
