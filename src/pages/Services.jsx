import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CTA from "../components/CTA.jsx";

const SERVICES = [
  { k: "01", t: "Brand & Identity", d: "Names, marks, and identity systems that make you unmistakable.", items: ["Logo & wordmark", "Identity systems", "Brand guidelines", "Messaging & voice"] },
  { k: "02", t: "Web Design & Development", d: "Marketing sites and web apps that load fast and actually convert.", items: ["Marketing websites", "Web applications", "E-commerce", "CMS integration"] },
  { k: "03", t: "Product & UI/UX", d: "Interfaces people understand instantly and enjoy using.", items: ["Product design", "UX research", "Design systems", "Prototyping"] },
  { k: "04", t: "App Development", d: "Cross-platform apps from a single, maintainable codebase.", items: ["React Native apps", "Electron desktop apps", "App store delivery", "Ongoing maintenance"] },
  { k: "05", t: "Motion & Interaction", d: "Movement that guides attention and adds the final layer of polish.", items: ["Motion design", "Micro-interactions", "Animated prototypes", "Brand motion"] },
  { k: "06", t: "AI & Automation", d: "Practical AI woven into the products you actually ship.", items: ["Generative AI features", "LLM integration", "Agentic workflows", "Process automation"] },
];

function ServiceRow({ s, open, onToggle }) {
  return (
    <div className="border-t border-black/10 last:border-b">
      <button onClick={onToggle} className="group flex w-full items-center gap-4 py-6 sm:py-8 text-left">
        <span className="font-semibold text-skyro tabular-nums" style={{ fontSize: "clamp(14px,1.3vw,18px)" }}>{s.k}</span>
        <h3 className="flex-1 font-semibold tracking-tight transition-colors group-hover:text-skyro" style={{ fontSize: "clamp(22px,3vw,42px)" }}>{s.t}</h3>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/15 transition-all group-hover:bg-skyro group-hover:text-white group-hover:border-skyro">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
      </button>
      <div className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out" style={{ maxHeight: open ? 260 : 0, opacity: open ? 1 : 0 }}>
        <div className="grid gap-6 pb-8 sm:grid-cols-[1fr_1fr] sm:pl-10">
          <p className="max-w-md text-[15px] sm:text-base leading-relaxed text-black/60">{s.d}</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">{s.items.map((it) => (<li key={it} className="flex items-center gap-2 text-[14px] text-black/70"><span className="h-1.5 w-1.5 rounded-full bg-launch" />{it}</li>))}</ul>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [open, setOpen] = useState(0);
  return (
    <>
      {/* HERO */}
      <section className="px-3 sm:px-5 lg:px-8 pt-3 sm:pt-5">
        <div className="relative mx-auto max-w-site 2xl:max-w-site-wide overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[34px]" style={{ background: "radial-gradient(120% 90% at 18% 8%, #5a45ff 0%, #3411e3 28%, #2209be 55%, #140596 78%, #0e036e 100%)" }}>
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(55% 50% at 88% 18%, rgba(120,90,255,.3) 0%, transparent 60%)" }} />
          <div className="relative flex min-h-[62vh] sm:min-h-[72vh] flex-col justify-between px-5 sm:px-8 lg:px-12 py-7 sm:py-10 lg:py-14">
            <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/55">Services</p>
            <Reveal className="max-w-[70ch] py-10 sm:py-14">
              <h1 className="font-semibold leading-[0.99] tracking-[-0.025em]" style={{ fontSize: "clamp(34px,5.6vw,92px)" }}>
                <span className="text-white">Everything you need</span>
                <span className="text-white">  to stand out —</span>
                <span className="text-white/40">under one roof.</span>
              </h1>
            </Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] sm:text-[13px] font-medium text-white/85 ring-1 ring-white/15"><span className="h-1.5 w-1.5 rounded-full bg-launch" /> From first idea to live product</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 lg:pt-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <Reveal><p className="max-w-3xl font-medium leading-[1.32] tracking-[-0.01em]" style={{ fontSize: "clamp(20px,2.5vw,36px)" }}><span className="text-black">Strategy, design, and engineering — handled by one team.</span> <span className="text-black/35">No briefs lost between agencies, no finger-pointing when something breaks. Just one group accountable for the whole thing.</span></p></Reveal>
          <Reveal delay={120}><p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45 lg:text-right">What we offer</p></Reveal>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-20">
        <div>
          {SERVICES.map((s, i) => (<Reveal key={s.k} delay={i * 60}><ServiceRow s={s} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} /></Reveal>))}
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-36">
        <Reveal><p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">How we engage</p></Reveal>
        <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-3">
          {[
            { t: "Project", d: "Fixed-scope builds with a clear start, finish, and deliverables. Best for launches and redesigns." },
            { t: "Retainer", d: "An ongoing design and development partner, month to month. Best for teams shipping continuously." },
            { t: "Advisory", d: "Strategy and direction when you have a team but need a compass. Best for early-stage and pivots." },
          ].map((m, i) => (
            <Reveal key={m.t} delay={i * 110}>
              <div className="group flex h-full flex-col justify-between rounded-2xl lg:rounded-[26px] border border-black/10 p-6 lg:p-8 transition-all duration-300 hover:border-black/0 hover:bg-skyro hover:text-white hover:shadow-[0_20px_50px_-20px_rgba(36,0,194,0.5)]">
                <div className="flex items-start justify-between"><span className="text-skyro text-xl leading-none transition-colors group-hover:text-launch">+</span><ArrowUpRight size={20} className="text-black/30 transition-all group-hover:text-white" /></div>
                <div className="mt-16 lg:mt-24"><h3 className="font-semibold tracking-tight" style={{ fontSize: "clamp(22px,2.2vw,30px)" }}>{m.t}</h3><p className="mt-3 text-[14px] leading-relaxed text-black/60 transition-colors group-hover:text-white/75">{m.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA heading="Not sure where to start?<br />Let's scope it together." />
    </>
  );
}
