import { useEffect, useRef, useState } from 'react';
import { prepareWithSegments, walkLineRanges } from '@chenglou/pretext';
import { motion } from 'framer-motion';
import './WaveText.css';

/**
 * WaveText — hero name animation.
 *
 * Uses pretext to measure the exact rendered text width without DOM reflow.
 * That measurement drives a precisely-sized shimmer overlay so the glow
 * always tracks the real glyph boundaries, even across fonts / zoom levels.
 *
 * Characters drop in with spring physics on mount, then idle with a
 * staggered CSS wave so the name feels alive at rest.
 */
const WaveText = ({ text, className = '' }) => {
  const [textWidth, setTextWidth] = useState(null);
  const containerRef = useRef(null);
  const chars = [...text]; // Unicode-safe split

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const cs = window.getComputedStyle(containerRef.current);
      const font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      try {
        const prepared = prepareWithSegments(text, font);
        let maxW = 0;
        walkLineRanges(prepared, 99999, (line) => {
          if (line.width > maxW) maxW = line.width;
        });
        if (maxW > 0) setTextWidth(Math.ceil(maxW));
      } catch (_) {
        // fallback: shimmer overlay won't render, wave still works
      }
    };
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure);
    } else {
      setTimeout(measure, 200);
    }
  }, [text]);

  return (
    <span ref={containerRef} className={`wave-text ${className}`}>
      {chars.map((char, i) =>
        char === ' ' ? (
          <span key={i} className="wave-space">&nbsp;</span>
        ) : (
          <motion.span
            key={i}
            className="wave-char"
            style={{ '--i': i }}
            initial={{ opacity: 0, y: -55, rotate: -18 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              delay: 0.25 + i * 0.045,
              duration: 0.75,
              type: 'spring',
              stiffness: 110,
              damping: 11,
            }}
          >
            {char}
          </motion.span>
        )
      )}

      {/* Shimmer bar — width pinned to pretext-measured glyph boundary */}
      {textWidth !== null && (
        <span
          className="wave-shimmer-track"
          style={{ width: `${textWidth}px` }}
          aria-hidden="true"
        >
          <span className="wave-shimmer-bar" />
        </span>
      )}
    </span>
  );
};

export default WaveText;
