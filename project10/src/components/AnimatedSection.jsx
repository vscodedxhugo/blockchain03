import React from 'react';
import { clsx } from 'clsx';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AnimatedSection({ children, className, delay = 0, yOffset = 40 }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0',
        className
      )}
      style={{
        transform: isVisible ? 'translateY(0)' : `translateY(${yOffset}px)`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}