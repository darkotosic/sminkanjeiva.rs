'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

function formatNumber(value: number) {
  return value.toLocaleString('sr-RS');
}

function AnimatedNumber({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let rafId = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const next = Math.round(target * progress);
      setValue(next);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [duration, started, target]);

  return <span ref={ref}>{formatNumber(value)}</span>;
}

export function AnimatedNumberText({ text }: { text: string }) {
  const tokens = useMemo(() => text.split(/(\d+[\d.,]*)/), [text]);

  return (
    <>
      {tokens.map((token, index) => {
        if (!token) return null;

        if (/^\d+[\d.,]*$/.test(token)) {
          const parsedValue = Number(token.replace(/\./g, '').replace(',', '.'));

          if (!Number.isNaN(parsedValue)) {
            return <AnimatedNumber key={`${token}-${index}`} target={Math.round(parsedValue)} />;
          }
        }

        return <span key={`${token}-${index}`}>{token}</span>;
      })}
    </>
  );
}
