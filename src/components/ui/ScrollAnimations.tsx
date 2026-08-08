import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

/** Adds restrained, section-level reveals without changing any section markup. */
export default function ScrollAnimations({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!scope.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('main > section');
      sections.forEach((section, index) => {
        if (index === 0) return;
        const content = section.querySelector<HTMLElement>('.container-custom') ?? section;
        gsap.from(content, {
          opacity: 0,
          y: 18,
          duration: 0.48,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 86%', once: true },
        });
        const cards = Array.from(content.querySelectorAll<HTMLElement>('[class*="grid"] > *')).slice(0, 6);
        if (cards.length > 1) gsap.from(cards, { opacity: 0, y: 14, duration: 0.38, stagger: 0.07, ease: 'power2.out', scrollTrigger: { trigger: content, start: 'top 82%', once: true } });
      });
    }, scope);
    return () => context.revert();
  }, []);
  return <div ref={scope}>{children}</div>;
}
