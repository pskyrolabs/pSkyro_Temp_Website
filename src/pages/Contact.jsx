import { useState } from "react";
import { ArrowUpRight, Check, Mail, MapPin } from "lucide-react";
import Reveal from "../components/Reveal.jsx";

const PROJECT_TYPES = ["Brand", "Web", "Product / UI/UX", "App", "Motion", "AI", "Other"];
const BUDGETS = ["Under \u20B91L", "\u20B91\u20135L", "\u20B95\u201315L", "\u20B915L+"];

function Field({ label, children, error }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/45">{label}</span>
      {children}
      {error && <span className="text-[12px] font-medium text-skyro">{error}</span>}
    </label>
  );
}

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", company: "", type: "", budget: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
  const inputCls = "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[15px] outline-none transition-all placeholder:text-black/30 focus:border-skyro focus:ring-4 focus:ring-skyro/10";

  const submit = (e) => {
    if (e) e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) er.email = "Enter a valid email address.";
    if (!f.message.trim()) er.message = "A few words about your project, please.";
    setErrors(er);
    if (Object.keys(er).length === 0) {
      // TODO: wire to your form handler / email service (Formspree, Resend, backend API, etc.)
      setSent(true);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="px-3 sm:px-5 lg:px-8 pt-3 sm:pt-5">
        <div className="relative mx-auto max-w-site 2xl:max-w-site-wide overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[34px]" style={{ background: "radial-gradient(120% 90% at 18% 8%, #5a45ff 0%, #3411e3 28%, #2209be 55%, #140596 78%, #0e036e 100%)" }}>
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(55% 50% at 88% 18%, rgba(120,90,255,.3) 0%, transparent 60%)" }} />
          <div className="relative flex min-h-[52vh] flex-col justify-between px-5 sm:px-8 lg:px-12 py-7 sm:py-10 lg:py-14">
            <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/55">Contact</p>
            <Reveal className="max-w-[20ch] py-8 sm:py-10">
              <h1 className="font-semibold leading-[0.92] tracking-[-0.025em]" style={{ fontSize: "clamp(34px,5.6vw,92px)" }}>
                <span className="text-white">Let's build</span><br />
                <span className="text-white/40">something together.</span>
              </h1>
            </Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] sm:text-[13px] font-medium text-white/85 ring-1 ring-white/15"><span className="h-1.5 w-1.5 rounded-full bg-launch" /> We reply within 1&ndash;2 business days</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="flex flex-col gap-10">
            <div>
              <h2 className="font-semibold leading-[1.1] tracking-[-0.02em]" style={{ fontSize: "clamp(24px,2.6vw,38px)" }}>Tell us what you're<br />trying to build.</h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-black/60">Whether it's a brand, a product, or a full launch — send a few details and we'll get back with next steps.</p>
            </div>
            <div className="flex flex-col gap-5">
              <a href="mailto:hello@pskyro.labs" className="group flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-black/15 transition-all group-hover:bg-skyro group-hover:text-white group-hover:border-skyro"><Mail size={18} /></span>
                <span><span className="block text-[11px] uppercase tracking-[0.16em] text-black/40">Email</span><span className="text-[15px] font-medium">hello@pskyro.labs</span></span>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-black/15"><MapPin size={18} /></span>
                <span><span className="block text-[11px] uppercase tracking-[0.16em] text-black/40">Based in</span><span className="text-[15px] font-medium">Bhopal, India</span></span>
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/pskyro-labs/" },
                { name: "Instagram", url: "https://www.instagram.com/pskyrolabs?igsh=djMwZWV0N3dkbncw" }
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/15 px-5 py-2 text-[13px] font-medium transition-all hover:bg-black hover:text-white hover:border-black"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="flex h-full min-h-[340px] flex-col items-start justify-center gap-5 rounded-2xl lg:rounded-[26px] border border-black/10 p-8 lg:p-12">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-skyro text-white"><Check size={26} /></span>
                <h3 className="font-semibold tracking-tight" style={{ fontSize: "clamp(24px,2.6vw,34px)" }}>Thanks, {f.name.split(" ")[0] || "there"} — message received.</h3>
                <p className="max-w-md text-[15px] leading-relaxed text-black/60">We've got your enquiry and will reply to {f.email} within 1&ndash;2 business days.</p>
                <button onClick={() => { setSent(false); setF({ name: "", email: "", company: "", type: "", budget: "", message: "" }); }} className="mt-2 inline-flex items-center gap-2 rounded-full bg-launch px-6 py-3 text-[14px] font-semibold text-black transition-all hover:gap-3">Send another <ArrowUpRight size={16} /></button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5 rounded-2xl lg:rounded-[26px] border border-black/10 p-6 sm:p-8 lg:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name *" error={errors.name}><input className={inputCls} value={f.name} onChange={set("name")} placeholder="Your name" /></Field>
                  <Field label="Email *" error={errors.email}><input className={inputCls} value={f.email} onChange={set("email")} placeholder="you@company.com" /></Field>
                </div>
                <Field label="Company"><input className={inputCls} value={f.company} onChange={set("company")} placeholder="Optional" /></Field>

                <Field label="What do you need?">
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((t) => (<button type="button" key={t} onClick={() => setF((p) => ({ ...p, type: p.type === t ? "" : t }))} className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all ${f.type === t ? "border-skyro bg-skyro text-white" : "border-black/15 text-black/70 hover:border-black/40"}`}>{t}</button>))}
                  </div>
                </Field>

                <Field label="Budget">
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (<button type="button" key={b} onClick={() => setF((p) => ({ ...p, budget: p.budget === b ? "" : b }))} className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all ${f.budget === b ? "border-black bg-black text-white" : "border-black/15 text-black/70 hover:border-black/40"}`}>{b}</button>))}
                  </div>
                </Field>

                <Field label="Project details *" error={errors.message}><textarea rows={4} className={`${inputCls} resize-none`} value={f.message} onChange={set("message")} placeholder="A few lines about what you're building, timelines, and goals." /></Field>

                <button type="submit" className="group mt-1 inline-flex w-fit items-center gap-3 rounded-full bg-black px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-skyro">
                  Send enquiry
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-launch text-black transition-transform group-hover:rotate-45"><ArrowUpRight size={16} /></span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
