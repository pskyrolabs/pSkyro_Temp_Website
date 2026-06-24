import { useEffect, useRef, useState } from "react";

/** Scroll-reveal wrapper. Fail-safe: never leaves content invisible. */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(true); return; }
    let done = false;
    const reveal = () => { if (!done) { done = true; setShown(true); } };
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { reveal(); io.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    const t = setTimeout(reveal, 1200);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(28px)",
      transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .7s cubic-bezier(.16,1,.3,1) ${delay}ms`,
    }}>{children}</div>
  );
}
