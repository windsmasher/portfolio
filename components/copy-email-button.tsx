'use client';

import { useCallback, useState } from 'react';

type CopyEmailButtonProps = {
  email: string;
  className?: string;
  titleHint: string;
  copiedLabel: string;
};

export function CopyEmailButton({
  email,
  className,
  titleHint,
  copiedLabel,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }, [email]);

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      title={titleHint}
    >
      {copied ? copiedLabel : email}
    </button>
  );
}
