import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MaskedReveal({ text, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.reveal-el');
      
      // Set initial state
      gsap.set(elements, { 
        y: '100%', 
        opacity: 0, 
        filter: 'blur(10px)' 
      });

      // Staggered clip-slide animation
      gsap.to(elements, {
        y: '0%',
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-x-[0.25em] gap-y-1 ${className}`}>
      {text.split(' ').map((word, i) => (
        <div key={i} className="overflow-hidden inline-flex pb-1 -mb-1">
          <span className="reveal-el inline-block will-change-[transform,opacity,filter]">
            {word}
          </span>
        </div>
      ))}
    </div>
  );
}