'use client';

import { useRef } from 'react';

type MagnifyChipsProps = {
  items: readonly string[];
};

const MAX_SCALE = 1.4;
const RADIUS = 100;

export function MagnifyChips({ items }: MagnifyChipsProps) {
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const frameRef = useRef<number | null>(null);

  const applyScale = (clientX: number, clientY: number) => {
    chipRefs.current.forEach((chip) => {
      if (!chip) return;
      const rect = chip.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(clientX - cx, clientY - cy);
      const scale = 1 + (MAX_SCALE - 1) * Math.max(0, 1 - dist / RADIUS);
      chip.style.transform = `scale(${scale})`;
      chip.style.zIndex = String(Math.round(scale * 10));
    });
  };

  const resetScale = () => {
    chipRefs.current.forEach((chip) => {
      if (!chip) return;
      chip.style.transform = 'scale(1)';
      chip.style.zIndex = '';
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (frameRef.current !== null) return;
    frameRef.current = requestAnimationFrame(() => {
      applyScale(clientX, clientY);
      frameRef.current = null;
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    resetScale();
  };

  return (
    <div
      className="chips"
      role="list"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, i) => (
        <span
          key={item}
          ref={(el) => {
            chipRefs.current[i] = el;
          }}
          className="chip chip-magnify"
          role="listitem"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
