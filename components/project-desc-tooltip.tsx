'use client';

import type { CSSProperties } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

type ProjectDescTooltipProps = {
  id: string;
  detail: string;
  moreInfoLabel: string;
};

const MARGIN = 12;
const GAP_PX = 7;
const MAX_WIDTH_PX = Math.round(17.5 * 16);

export function ProjectDescTooltip({ id, detail, moreInfoLabel }: ProjectDescTooltipProps) {
  const [open, setOpen] = useState(false);
  const [layout, setLayout] = useState<{
    left: number;
    top: number;
    maxW: number;
  } | null>(null);

  const hostRef = useRef<HTMLSpanElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const tipRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!open) {
      setLayout(null);
      return;
    }

    const measure = () => {
      const btn = btnRef.current;
      const tip = tipRef.current;
      if (!btn || !tip) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const maxW = Math.min(MAX_WIDTH_PX, vw - 2 * MARGIN);

      const brBtn = btn.getBoundingClientRect();
      const tr = tip.getBoundingClientRect();
      const tipW = tr.width;
      const tipH = tr.height;

      let left = brBtn.left + brBtn.width / 2 - tipW / 2;
      left = Math.max(MARGIN, Math.min(left, vw - tipW - MARGIN));

      let top = brBtn.top - tipH - GAP_PX;
      if (top < MARGIN) {
        top = brBtn.bottom + GAP_PX;
      }
      if (top + tipH > vh - MARGIN) {
        top = Math.max(MARGIN, vh - tipH - MARGIN);
      }

      setLayout({ left, top, maxW });
    };

    measure();
    const ro = new ResizeObserver(measure);
    const tip = tipRef.current;
    if (tip) ro.observe(tip);
    window.addEventListener('scroll', measure, true);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', measure, true);
      window.removeEventListener('resize', measure);
    };
  }, [open, detail]);

  const maxWGuess =
    typeof window !== 'undefined' ? Math.min(MAX_WIDTH_PX, window.innerWidth - 2 * MARGIN) : MAX_WIDTH_PX;

  const tipStyle: CSSProperties | undefined = !open
    ? {
        position: 'fixed',
        left: -9999,
        top: 0,
        maxWidth: maxWGuess,
        visibility: 'hidden',
        pointerEvents: 'none',
      }
    : layout
      ? {
          position: 'fixed',
          left: layout.left,
          top: layout.top,
          maxWidth: layout.maxW,
        }
      : {
          position: 'fixed',
          left: -9999,
          top: 0,
          maxWidth: maxWGuess,
          opacity: 0,
          pointerEvents: 'none',
        };

  return (
    <span
      ref={hostRef}
      className="project-desc-info-host"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={btnRef}
        type="button"
        className="project-desc-info"
        aria-describedby={id}
        aria-expanded={open}
        aria-label={moreInfoLabel}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          if (!hostRef.current?.contains(e.relatedTarget as Node | null)) {
            setOpen(false);
          }
        }}
      >
        <svg
          className="project-desc-info-icon"
          viewBox="0 0 16 16"
          width={14}
          height={14}
          aria-hidden
          focusable="false"
        >
          <circle
            cx="8"
            cy="8"
            r="6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            fill="currentColor"
            d="M8 4.1a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-.6 3.15h1.2v4.65H7.4Z"
          />
        </svg>
      </button>
      <span
        ref={tipRef}
        id={id}
        role="tooltip"
        className={`project-desc-tooltip${open && layout ? ' project-desc-tooltip--visible' : ''}`}
        style={tipStyle}
        onMouseDown={(e) => e.preventDefault()}
      >
        {detail}
      </span>
    </span>
  );
}
