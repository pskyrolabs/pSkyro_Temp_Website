import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal.jsx";

export default function NotFound() {
  return (
    <section className="px-3 sm:px-5 lg:px-8 pt-3 sm:pt-5">
      <div
        className="relative mx-auto max-w-site 2xl:max-w-site-wide overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[34px] flex flex-col justify-center items-center text-center py-24 sm:py-32 lg:py-40 px-5"
        style={{ background: "radial-gradient(120% 90% at 18% 8%, #5a45ff 0%, #3411e3 28%, #2209be 55%, #140596 78%, #0e036e 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(55% 50% at 88% 18%, rgba(120,90,255,.3) 0%, transparent 60%)" }} />

        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] sm:text-[13px] font-medium text-white/85 ring-1 ring-white/15 mb-6">
            Error 404
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-semibold leading-[0.95] tracking-[-0.025em] text-white" style={{ fontSize: "clamp(48px, 8vw, 120px)" }}>
            Lost in space?
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-md mx-auto text-[15px] sm:text-lg leading-relaxed text-white/60">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-[15px] font-semibold transition-all hover:bg-launch hover:text-black"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
