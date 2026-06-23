import { Link } from "react-router-dom";
import Wordmark from "./Wordmark.jsx";

const COLS = [
  { h: "Company", items: [["About", "/about"], ["Services", "/services"], ["Careers", "/contact"]] },
  { h: "Services", items: [["Brand", "/services"], ["Web", "/services"], ["Product", "/services"], ["Motion", "/services"]] },
  { h: "Connect", items: [["Contact", "/contact"], ["LinkedIn", "/contact"], ["Instagram", "/contact"]] },
];

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 sm:mt-28 lg:mt-36 max-w-site 2xl:max-w-site-wide px-4 sm:px-6 lg:px-10 pb-10">
      <div className="rounded-[20px] sm:rounded-[28px] lg:rounded-[34px] bg-black px-6 sm:px-10 lg:px-14 py-10 sm:py-14 text-white">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Wordmark dark />
            <p className="mt-5 font-semibold uppercase tracking-[0.12em] text-white/90" style={{ fontSize: "clamp(18px,1.8vw,26px)" }}>Not built to blend in</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {COLS.map((col) => (
              <div key={col.h}>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">{col.h}</p>
                <ul className="mt-4 space-y-3 text-[14px] text-white/70">
                  {col.items.map(([it, to]) => (
                    <li key={it}><Link to={to} className="transition-colors hover:text-launch">{it}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} pSkyro Labs. A design &amp; technology company.</span>
          <span>Gwalior, India</span>
        </div>
      </div>
    </footer>
  );
}
