import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function CTA({ heading }) {
  return (
    <section className="mx-auto max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-36">
      <Reveal>
        <div className="flex flex-col items-start gap-8 border-t border-black/10 pt-12 sm:pt-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[18ch] font-semibold leading-[1.04] tracking-[-0.02em]" style={{ fontSize: "clamp(30px,4.4vw,68px)" }} dangerouslySetInnerHTML={{ __html: heading }} />
          <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-skyro">
            Start a project
            <span className="grid h-7 w-7 place-items-center rounded-full bg-launch text-black transition-transform group-hover:rotate-45"><ArrowUpRight size={16} /></span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
