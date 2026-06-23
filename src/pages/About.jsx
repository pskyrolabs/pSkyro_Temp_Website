import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";

export default function About() {
  const disciplines = ["Brand Identity", "UI / UX Design", "Web Development", "App Development", "Motion Design", "Generative AI", "Product Strategy", "Design Systems"];
  return (
    <>
      {/* HERO */}
      <section className="px-3 sm:px-5 lg:px-8 pt-3 sm:pt-5">
        <div className="relative mx-auto max-w-site 2xl:max-w-site-wide overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[34px]" style={{ background: "radial-gradient(120% 90% at 18% 8%, #4b34e0 0%, #2400C2 26%, #160089 52%, #0a0440 76%, #04021c 100%)" }}>
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(55% 50% at 88% 18%, rgba(120,90,255,.3) 0%, transparent 60%)" }} />
          <div className="relative flex min-h-[62vh] flex-col justify-between px-5 sm:px-8 lg:px-12 py-7 sm:py-10 lg:py-14">
            <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/55">About pSkyro Labs</p>
            <Reveal className="max-w-[18ch] py-10 sm:py-14">
              <h1 className="font-semibold leading-[0.92] tracking-[-0.025em]" style={{ fontSize: "clamp(34px,5.6vw,92px)" }}>
                <span className="text-white">We build brands and</span><br />
                <span className="text-white">products that are</span><br />
                <span className="text-white/40">impossible to ignore.</span>
              </h1>
            </Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] sm:text-[13px] font-medium text-white/85 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-launch" /> Design &times; Technology
            </span>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-semibold leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(28px,3.6vw,56px)" }}>Strategy, design and<br />engineering under<br />one roof.</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">Who we are</p>
            <p className="text-[15px] sm:text-base leading-relaxed text-black/70">pSkyro Labs partners with founders and teams who want more than a vendor. We embed alongside you — from positioning and brand to the product people actually use — and run the whole thing through one filter: it has to stand out.</p>
            <p className="text-[15px] sm:text-base leading-relaxed text-black/60">No handoffs between disconnected agencies. One team, one standard, accountable for the work from first sketch to launch.</p>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-3 sm:px-5 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
        <div className="relative mx-auto max-w-site 2xl:max-w-site-wide overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[34px]" style={{ background: "radial-gradient(120% 120% at 80% 8%, #4b34e0 0%, #2400C2 42%, #1400a8 100%)" }}>
          <div className="pointer-events-none absolute -right-1/4 -top-1/3 h-[140%] w-1/2 rotate-12" style={{ background: "radial-gradient(closest-side, rgba(255,245,0,.18), transparent)" }} />
          <div className="relative px-5 sm:px-8 lg:px-14 py-14 sm:py-20 lg:py-28">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-launch">Our philosophy</p>
              <h2 className="mt-6 font-semibold uppercase leading-[0.95] tracking-[-0.01em] text-white" style={{ fontSize: "clamp(36px,6vw,104px)" }}>Not built<br /><span className="text-launch">to blend in.</span></h2>
              <p className="mt-8 max-w-xl text-[15px] sm:text-lg leading-relaxed text-white/85">It isn't a tagline — it's the brief we give ourselves on every project. Safe work gets ignored. We'd rather make something people remember.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-20">
        <Reveal><p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">How we work</p></Reveal>
        <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
          {[
            { n: "01", t: "Discover", d: "We dig into the business, the users, and what's actually at stake before touching a pixel." },
            { n: "02", t: "Define", d: "We sharpen the positioning and turn it into a clear, opinionated plan everyone can rally around." },
            { n: "03", t: "Design", d: "Brand and product, crafted detail by detail — the part where things start to stand out." },
            { n: "04", t: "Build & launch", d: "We ship it, measure it, and refine — production-grade work, not pretty mockups." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="group grid grid-cols-[auto_1fr] items-start gap-5 py-7 sm:grid-cols-[80px_1fr_1.4fr] sm:gap-8 sm:py-9">
                <span className="font-semibold text-skyro" style={{ fontSize: "clamp(20px,1.8vw,26px)" }}>{s.n}</span>
                <h3 className="font-semibold tracking-tight" style={{ fontSize: "clamp(22px,2.4vw,34px)" }}>{s.t}</h3>
                <p className="col-span-2 text-[14px] sm:text-[15px] leading-relaxed text-black/60 sm:col-span-1">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-36">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {[
            { t: "Distinct over safe", d: "If it could belong to anyone else, it isn't done." },
            { t: "Partners, not vendors", d: "We're in the room for the hard calls, not just the deliverables." },
            { t: "Detail is the difference", d: "Premium is a thousand small decisions made right." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 110}>
              <div className="flex h-full flex-col gap-3 rounded-2xl lg:rounded-[26px] border border-black/10 p-6 lg:p-8">
                <span className="h-2 w-2 rounded-full bg-launch ring-4 ring-launch/20" />
                <h3 className="mt-2 font-semibold tracking-tight" style={{ fontSize: "clamp(18px,1.6vw,24px)" }}>{p.t}</h3>
                <p className="text-[14px] leading-relaxed text-black/60">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CAPABILITIES MARQUEE */}
      <section className="pt-20 sm:pt-28 lg:pt-36">
        <div className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10"><p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">What we do</p></div>
        <div className="relative mt-8 overflow-hidden border-y border-black/10 py-6 sm:py-8">
          <div className="marquee flex w-max gap-4 sm:gap-6" style={{ animation: "marquee 32s linear infinite" }}>
            {[...disciplines, ...disciplines].map((d, i) => (
              <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap font-semibold tracking-tight text-black/80" style={{ fontSize: "clamp(22px,2.6vw,40px)" }}>{d}<span className="h-2 w-2 rounded-full bg-skyro" /></span>
            ))}
          </div>
        </div>
      </section>

      <CTA heading="Want to build something<br />worth remembering?" />
    </>
  );
}
