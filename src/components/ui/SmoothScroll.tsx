import Lenis from 'lenis';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

/** Enables inertia scrolling while keeping native links, keyboard scroll and reduced motion intact. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.2 });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);
  return <>{children}</>;
}
