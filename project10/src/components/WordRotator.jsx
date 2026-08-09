import React, { useState, useEffect } from 'react';

const WORDS = ['pages', 'products', 'marketing'];

export default function WordRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom" style={{ height: '1.2em' }}>
      {WORDS.map((word, wIdx) => {
        const isActive = wIdx === index;
        // Determine the previous word to animate it out correctly
        const isPrev = wIdx === (index - 1 + WORDS.length) % WORDS.length;
        
        return (
          <span
            key={word}
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden={!isActive}
          >
            {word.split('').map((char, cIdx) => {
              // Defaults for words waiting to enter
              let translateY = '-100%';
              let opacity = 0;
              
              if (isActive) {
                translateY = '0%';
                opacity = 1;
              } else if (isPrev) {
                translateY = '100%';
                opacity = 0;
              }

              return (
                <span
                  key={cIdx}
                  className="inline-block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                  style={{
                    transform: `translateY(${translateY})`,
                    opacity: opacity,
                    transitionDelay: `${cIdx * 50}ms`
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </span>
        );
      })}
      {/* Invisible spacer to maintain layout width based on the longest word */}
      <span className="invisible opacity-0 pointer-events-none">
        {WORDS.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}