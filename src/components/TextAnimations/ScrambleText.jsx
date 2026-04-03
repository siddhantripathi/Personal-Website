import { useEffect, useRef, useState } from 'react';
import { prepareWithSegments, walkLineRanges } from '@chenglou/pretext';
import './ScrambleText.css';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

const ScrambleText = ({ text, tag: Tag = 'h2', className = '', animDelay = 0 }) => {
  const [display, setDisplay] = useState(text);
  const [stableWidth, setStableWidth] = useState(null);
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const timerRef = useRef(null);

  // Phase 1: Use pretext to measure stable text width — sets min-width before
  // scramble starts so random characters never cause layout shift.
  useEffect(() => {
    if (!ref.current) return;
    const measure = () => {
      if (!ref.current) return;
      const cs = window.getComputedStyle(ref.current);
      const font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      try {
        const prepared = prepareWithSegments(text, font);
        let maxW = 0;
        walkLineRanges(prepared, 99999, (line) => {
          if (line.width > maxW) maxW = line.width;
        });
        if (maxW > 0) setStableWidth(Math.ceil(maxW));
      } catch (_) {
        // Graceful fallback: no min-width enforced
      }
    };
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure);
    } else {
      setTimeout(measure, 200);
    }
  }, [text]);

  // Phase 2: Start scramble when element scrolls into view
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          obs.disconnect();
          timerRef.current = setTimeout(runScramble, animDelay);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(timerRef.current);
    };
  }, [animDelay]); // eslint-disable-line react-hooks/exhaustive-deps

  const runScramble = () => {
    const chars = text.split('');
    let frame = 0;
    const totalFrames = chars.length * 5;

    const tick = () => {
      const lockedCount = Math.floor(frame / 5);
      const next = chars
        .map((ch, i) => {
          if (ch === ' ') return ' ';
          if (i < lockedCount) return ch;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join('');
      setDisplay(next);
      frame++;
      if (frame <= totalFrames) {
        timerRef.current = setTimeout(tick, 28);
      } else {
        setDisplay(text);
      }
    };
    tick();
  };

  return (
    <Tag
      ref={ref}
      className={`scramble-text ${className}`}
      style={stableWidth ? { minWidth: `${stableWidth}px` } : undefined}
    >
      {display}
    </Tag>
  );
};

export default ScrambleText;
