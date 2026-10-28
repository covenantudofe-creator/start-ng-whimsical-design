// CreatorRobotArt component – whimsical robot mascot
// Moved from Creators.tsx to its own file.

type CreatorRobotArtProps = {
  idle: string | null; // RobotExercise is a string union; using string for simplicity
  className?: string;
};

export default function CreatorRobotArt({ idle, className = "" }: CreatorRobotArtProps) {
  // whimsical mascot redesign
  return (
    <div className={`creator-robot-motion ${className}`}>
      <svg
        className="creator-robot"
        data-idle={idle ?? undefined}
        viewBox="0 0 100 120"
        aria-hidden="true"
        focusable="false"
      >
        {/* Antenna */}
        <path
          className="creator-robot-antenna"
          d="M50 12v-8m0 2 8-5"
          stroke="#a0e7ff"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="60" cy="6" r="3" className="creator-robot-spark" fill="#ffdc73" />
        {/* Head */}
        <g className="creator-robot-head">
          <rect
            className="creator-robot-head-shell"
            x="18"
            y="16"
            width="64"
            height="53"
            rx="28"
            fill="#e0b3ff"
            stroke="#a0e7ff"
            strokeWidth="2.5"
          />
          <rect
            className="creator-robot-face"
            x="25"
            y="27"
            width="50"
            height="31"
            rx="20"
            fill="#fffdc0"
          />
          {/* Cheeks */}
          <circle cx="38" cy="45" r="4" fill="#ffb3b3" />
          <circle cx="62" cy="45" r="4" fill="#ffb3b3" />
          {/* Eyes */}
          <ellipse className="creator-robot-eye-socket" cx="39" cy="42" rx="6.5" ry="8" fill="#a0e7ff" />
          <ellipse className="creator-robot-eye-socket" cx="61" cy="42" rx="6.5" ry="8" fill="#a0e7ff" />
          <circle className="creator-robot-pupil" cx="40" cy="42" r="3.3" fill="#ff7f50" />
          <circle className="creator-robot-pupil" cx="62" cy="42" r="3.3" fill="#ff7f50" />
          <circle className="creator-robot-eye-glint" cx="39" cy="40" r="1.15" fill="#fff" />
          <circle className="creator-robot-eye-glint" cx="61" cy="40" r="1.15" fill="#fff" />
          {/* Mouth smile */}
          <path
            className="creator-robot-mouth"
            d="M46 56q4 3 8 0"
            stroke="#ff7f50"
            strokeWidth="2"
            fill="none"
          />
        </g>
        {/* Arms */}
        <path
          className="creator-robot-arm creator-robot-arm-left"
          d="M32 77q-9 3-12 13"
          stroke="#a0e7ff"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="creator-robot-arm creator-robot-arm-right"
          d="M68 77q9 3 12 13"
          stroke="#a0e7ff"
          strokeWidth="4"
          fill="none"
        />
        {/* Hands */}
        <circle className="creator-robot-hand" cx="20" cy="91" r="4" fill="#e0b3ff" stroke="#a0e7ff" strokeWidth="2.5" />
        <circle className="creator-robot-hand" cx="80" cy="91" r="4" fill="#e0b3ff" stroke="#a0e7ff" strokeWidth="2.5" />
        {/* Body */}
        <rect className="creator-robot-body" x="30" y="69" width="40" height="34" rx="12" fill="#fffdc0" stroke="#a0e7ff" strokeWidth="2.5" />
        <rect
          className="creator-robot-body-panel"
          x="40"
          y="78"
          width="20"
          height="14"
          rx="5"
          fill="#ffd1b3"
          stroke="#a0e7ff"
          strokeWidth="1.5"
        />
        <circle className="creator-robot-body-light" cx="50" cy="85" r="3" fill="#ffdc73" />
        {/* Legs */}
        <path className="creator-robot-leg creator-robot-leg-left" d="M41 101v8" stroke="#a0e7ff" strokeWidth="4" fill="none" />
        <path className="creator-robot-leg creator-robot-leg-right" d="M59 101v8" stroke="#a0e7ff" strokeWidth="4" fill="none" />
        <path
          className="creator-robot-foot"
          d="M34 111h13q0 5-6 5h-7q-3 0-3-2t3-3Zm19 0h13q3 1 3 3t-3 2h-7q-6 0-6-5Z"
          fill="#e0b3ff"
          stroke="#a0e7ff"
          strokeWidth="2"
        />
        {/* Shadow */}
        <ellipse className="creator-robot-shadow" cx="50" cy="118" rx="25" ry="2" fill="rgba(0,0,0,0.1)" />
        {/* Sparkles */}
        <circle cx="30" cy="20" r="1.5" fill="#fff" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0;0.8" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="25" r="1.5" fill="#fff" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0;0.6" dur="6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
