'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot) {
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) / 8;
      ringY += (mouseY - ringY) / 8;

      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      requestAnimationFrame(animateRing);
    };

    const hideCursor = () => {
      if (dot) dot.style.opacity = '0';
      if (ring) ring.style.opacity = '0';
    };

    const showCursor = () => {
      if (dot) dot.style.opacity = '1';
      if (ring) ring.style.opacity = '1';
    };

    document.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseout', hideCursor);
    window.addEventListener('mouseover', showCursor);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseout', hideCursor);
      window.removeEventListener('mouseover', showCursor);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor cursor-style:dot" />
      <div ref={ringRef} className="cursor cursor-style:ring" />
    </>
  );
}
