import { useEffect, useRef, useState, type PointerEvent } from "react";
import "./LampWithFlower.css";

const EYES = [{ x: 27, y: 21 }, { x: 45, y: 21 }];
const PUPIL_TRAVEL = 2.5;

export default function LampWithFlower() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pupilsRef = useRef<(SVGGElement | null)[]>([]);
  const reducedMotion = useRef(false);
  const flowerActive = useRef(false);
  const [flower, setFlower] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => { reducedMotion.current = preference.matches; };
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!flower) return;
    const timeout = window.setTimeout(() => {
      flowerActive.current = false;
      setFlower(false);
    }, 2400);
    return () => window.clearTimeout(timeout);
  }, [flower]);

  function moveEyes(event: PointerEvent<HTMLButtonElement>) {
    const svg = svgRef.current;
    if (!svg || reducedMotion.current) return;
    const bounds = svg.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;

    const pointerX = ((event.clientX - bounds.left) / bounds.width) * 72;
    const pointerY = ((event.clientY - bounds.top) / bounds.height) * 72;
    EYES.forEach((eye, index) => {
      const dx = pointerX - eye.x;
      const dy = pointerY - eye.y;
      const distance = Math.hypot(dx, dy) || 1;
      const travel = Math.min(distance, PUPIL_TRAVEL);
      pupilsRef.current[index]?.setAttribute(
        "transform",
        `translate(${(dx / distance) * travel} ${(dy / distance) * travel})`,
      );
    });
  }

  function resetEyes() {
    pupilsRef.current.forEach((pupil) => pupil?.setAttribute("transform", "translate(0 0)"));
  }

  function growFlower() {
    if (flowerActive.current) return;
    flowerActive.current = true;
    setFlower(true);
  }

  return (
    <button
      type="button"
      className="lamp-button"
      aria-label="Grow a flower with the lamp"
      onPointerMove={moveEyes}
      onPointerLeave={resetEyes}
      onClick={growFlower}
    >
      <svg ref={svgRef} className="lamp" viewBox="0 0 72 72" aria-hidden="true" focusable="false">
        <path className="lamp-shade" d="M18 7h36l9 23H9L18 7Z" />
        <rect className="lamp-face" x="13" y="13" width="46" height="16" rx="6" />
        {EYES.map((eye, index) => (
          <g key={eye.x}>
            <circle className="lamp-eye" cx={eye.x} cy={eye.y} r="5" />
            <g
              ref={(node) => { pupilsRef.current[index] = node; }}
              className="lamp-pupil"
            >
              <circle cx={eye.x} cy={eye.y} r="1.8" />
            </g>
          </g>
        ))}
        <path className="lamp-neck" d="M36 30v24" />
        <path className="lamp-base" d="M22 56h28l4 6H18l4-6Z" />
      </svg>
      {flower && (
        <svg className="lamp-flower" viewBox="0 0 40 48" aria-hidden="true" focusable="false">
          <path className="flower-stem" d="M20 22c-4 8 4 14 0 23" />
          <path className="flower-leaf" d="M20 34c-7-5-10-2-10 0 3 4 7 4 10 2m1-8c6-5 9-2 9 0-3 4-6 4-9 2" />
          <g className="flower-petals">
            <circle cx="20" cy="8" r="5.5" />
            <circle cx="27" cy="15" r="5.5" />
            <circle cx="20" cy="22" r="5.5" />
            <circle cx="13" cy="15" r="5.5" />
            <circle className="flower-center" cx="20" cy="15" r="3" />
          </g>
        </svg>
      )}
    </button>
  );
}
