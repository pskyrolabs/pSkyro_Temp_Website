import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";
import elem from "../assets/elem.png";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-3 sm:px-5 lg:px-8 pt-3 sm:pt-5">
        <div className="relative mx-auto max-w-site 2xl:max-w-site-wide overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[34px]" style={{ background: "radial-gradient(120% 90% at 18% 8%, #5a45ff 0%, #3411e3 28%, #2209be 55%, #140596 78%, #0e036e 100%)" }}>
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 50% at 85% 25%, rgba(120,90,255,.28) 0%, transparent 60%)" }} />
          
          {/* Static brand element on the right */}
          <div className="absolute right-[-56px] bottom-[-56px] sm:-right-[30px] md:-right-[60px] lg:-right-[90px] sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-[240px] sm:w-[400px] md:w-[520px] lg:w-[640px] aspect-square pointer-events-none select-none z-0">
            <img
              src={elem}
              alt=""
              className="w-full h-full object-contain opacity-[0.9]"
            />
          </div>

          <div className="relative flex min-h-[62vh] sm:min-h-[68vh] flex-col justify-start sm:justify-between px-5 sm:px-8 lg:px-12 py-7 sm:py-10 lg:py-14 z-10">
            <div className="flex items-start justify-between">
              <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/55">A design &amp; technology company</p>
            </div>
            
            <div className="flex flex-col gap-10 sm:gap-20 items-start mt-10 sm:mt-0">
              <Reveal className="max-w-[80ch]">
                <h1 className="font-semibold leading-[1.05] tracking-[-0.025em]" style={{ fontSize: "clamp(30px, 8vw, 64px)" }}>
                  <span className="text-white">We design and</span><br className="sm:hidden" /><span className="text-white"> build</span><br /><span className="text-white"> experiences</span><br className="sm:hidden" /><span className="text-white"> that</span><br className="hidden sm:inline" /><span className="text-white"> refuse to</span><br className="sm:hidden" /><span className="text-white"> blend in</span>
                </h1>
              </Reveal>
              
              <div className="flex flex-wrap items-end justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-black select-none">
                  Not built to blend in
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-semibold leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(28px,3.6vw,56px)" }}>For building bold<br />digital realities</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col items-start gap-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">What we do</p>
            <p className="max-w-md text-[15px] sm:text-base leading-relaxed text-black/70">pSkyro Labs is a design and technology company. We craft premium digital products — brand, web, and the systems behind them — for startups and established teams.</p>
            <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-launch px-7 py-3 text-[14px] font-semibold text-black transition-all hover:gap-3 hover:shadow-[0_8px_30px_rgba(255,245,0,0.4)]">
              More <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr]">
          <Reveal delay={80}>
            <div className="group relative h-56 sm:h-72 lg:h-80 overflow-hidden rounded-2xl lg:rounded-[26px]" style={{ background: "radial-gradient(130% 120% at 20% 0%, #5a45ff 0%, #2400C2 38%, #0a0440 100%)" }}>
              <div className="absolute inset-0 opacity-60 transition-transform duration-700 group-hover:scale-105" style={{ background: "conic-gradient(from 210deg at 70% 60%, transparent, rgba(255,255,255,.35), transparent 40%)" }} />
              <span className="absolute bottom-5 left-5 text-[12px] font-medium uppercase tracking-[0.16em] text-white/70">Product design</span>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="group relative h-56 sm:h-72 lg:h-80 overflow-hidden rounded-2xl lg:rounded-[26px]" style={{ background: "linear-gradient(135deg, #04021c 0%, #160089 60%, #2400C2 100%)" }}>
              <div className="absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "linear-gradient(rgba(120,110,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(120,110,255,.25) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
              <span className="absolute bottom-5 left-5 text-[12px] font-medium uppercase tracking-[0.16em] text-white/70">Engineering</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY pSKYRO */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-36">
        <div className="border-t border-black/10 pt-10 sm:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <Reveal>
              <p className="max-w-4xl font-medium leading-[1.32] tracking-[-0.01em]" style={{ fontSize: "clamp(20px,2.5vw,36px)" }}>
                <span className="text-black">We partner with startups and established teams to rediscover what makes them distinct.</span>{" "}
                <span className="text-black/35">Through strategy, craft, and technology, we build work that connects, resonates, and drives real impact &mdash; on people and on results.</span>
              </p>
            </Reveal>
            <Reveal delay={120}><p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45 lg:text-right">Why pSkyro</p></Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-3 sm:px-5 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="relative mx-auto max-w-site 2xl:max-w-site-wide overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[34px]" style={{ background: "radial-gradient(120% 130% at 75% 0%, #1d1456 0%, #0a0633 45%, #04021c 100%)" }}>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(to top, rgba(90,70,220,.22), transparent)" }} />
          <div className="relative px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20">
            <Reveal>
              <h2 className="max-w-[16ch] font-semibold leading-[1.05] tracking-[-0.02em] text-white" style={{ fontSize: "clamp(28px,4vw,64px)" }}>Every project is a fusion of strategy, craft and technology</h2>
            </Reveal>
            <div className="mt-12 sm:mt-16 lg:mt-24 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {[
                { n: "120+", l: "Products shipped for clients across India and beyond" },
                { n: "98%", l: "Clients who return for their next project with us" },
                { n: "15+", l: "Industries served — from fintech to commerce to SaaS" },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 120}>
                  <div className="flex flex-col gap-4 border-t border-white/15 pt-5">
                    <span className="font-semibold leading-none text-launch" style={{ fontSize: "clamp(40px,4.5vw,72px)" }}>{s.n}</span>
                    <p className="max-w-[26ch] text-[13px] sm:text-sm leading-relaxed text-white/60">{s.l}</p>
                    <button className="mt-1 grid h-10 w-10 place-items-center rounded-full border border-white/25 text-white transition-all hover:bg-launch hover:text-black hover:border-launch"><ArrowRight size={16} /></button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-36">
        <Reveal><p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">Three pillars, one studio</p></Reveal>
        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-3">
          {[
            { t: "Client Services", d: "Premium design and technology, delivered end to end — brand, product, and the systems that run them." },
            { t: "Products", d: "Proprietary SaaS and tools we build in-house, shaped by the same standards we hold our client work to." },
            { t: "Hidezign", d: "Practical, industry-level design and development education for students who lack access to real mentorship." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 110}>
              <div className="group flex h-full flex-col justify-between rounded-2xl lg:rounded-[26px] border border-black/10 p-6 lg:p-8 transition-all duration-300 hover:border-black/0 hover:bg-skyro hover:text-white hover:shadow-[0_20px_50px_-20px_rgba(36,0,194,0.5)]">
                <div className="flex items-start justify-between">
                  <span className="text-skyro text-xl leading-none transition-colors group-hover:text-launch">+</span>
                  <ArrowUpRight size={20} className="text-black/30 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-16 lg:mt-24">
                  <h3 className="font-semibold tracking-tight" style={{ fontSize: "clamp(22px,2.2vw,30px)" }}>{p.t}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-black/60 transition-colors group-hover:text-white/75">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA heading="Let's build something<br />that stands out." />
    </>
  );
}
