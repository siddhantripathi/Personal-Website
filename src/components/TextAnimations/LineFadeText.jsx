import { useEffect, useRef, useState } from 'react';
import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext';
import { motion } from 'framer-motion';
import './LineFadeText.css';

/**
 * LineFadeText — paragraph bio animation.
 *
 * Uses pretext's layoutWithLines() to compute exactly where the browser will
 * wrap each paragraph into visual lines (without touching the DOM or triggering
 * reflow). Each resulting line is then rendered as its own motion element and
 * slides in from the left with a stagger delay, giving the bio text a
 * typewriter-style "reading unfold" feel as the section comes into view.
 *
 * On resize the lines are recomputed via ResizeObserver so the animation
 * groups stay accurate across breakpoints.
 */
const LineFadeText = ({ paragraphs, className = '' }) => {
  const [lineGroups, setLineGroups] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const compute = () => {
      const el = containerRef.current;
      if (!el) return;
      const width = el.offsetWidth;
      if (!width) return;

      const cs = window.getComputedStyle(el);
      const fontSize = parseFloat(cs.fontSize) || 16;
      // Use a generic named font so pretext canvas measurement matches DOM rendering.
      const font = `${fontSize}px Arial, sans-serif`;
      const lineHeightPx = fontSize * 1.75;

      const groups = paragraphs.map((para) => {
        const trimmed = para.trim();
        if (!trimmed) return [];
        try {
          const prepared = prepareWithSegments(trimmed, font);
          const result = layoutWithLines(prepared, width, lineHeightPx);
          return result.lines.map((l) => l.text);
        } catch (_) {
          return [trimmed];
        }
      });

      setLineGroups(groups);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(compute);
    } else {
      setTimeout(compute, 200);
    }

    const ro = new ResizeObserver(compute);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [paragraphs]);

  // Build a flat list for stagger index calculation
  let lineCounter = 0;

  return (
    <div ref={containerRef} className={`line-fade-text ${className}`}>
      {lineGroups
        ? lineGroups.map((group, gi) => (
            <div key={gi} className="lft-paragraph">
              {group.map((lineText, li) => {
                const idx = lineCounter++;
                return (
                  <motion.span
                    key={li}
                    className="lft-line"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{
                      delay: Math.min(idx * 0.028, 0.55),
                      duration: 0.45,
                      ease: 'easeOut',
                    }}
                  >
                    {lineText}
                  </motion.span>
                );
              })}
            </div>
          ))
        : paragraphs.map((p, i) => (
            <p key={i} className="lft-paragraph lft-fallback">
              {p}
            </p>
          ))}
    </div>
  );
};

export default LineFadeText;
