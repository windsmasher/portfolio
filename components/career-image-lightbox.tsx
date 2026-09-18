'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type CareerImageLightboxProps = {
  src: string;
  alt: string;
  closeLabel: string;
};

export function CareerImageLightbox({ src, alt, closeLabel }: CareerImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="career-image-thumb"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <Image src={src} alt={alt} width={90} height={132} className="career-image-thumb-img" />
      </button>

      {open ? (
        <div
          className="career-image-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="career-image-lightbox-close"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <img
            src={src}
            alt={alt}
            className="career-image-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
