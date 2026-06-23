import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Wordmark from "./Wordmark.jsx";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const desktop = LINKS.filter((l) => l.to !== "/");

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-black/[0.06]">
      <div className="mx-auto flex h-16 sm:h-[72px] max-w-site 2xl:max-w-site-wide items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-baseline gap-1" onClick={() => setOpen(false)}>
          <Wordmark />
          <span className="text-black/40 text-[10px] font-medium translate-y-[-6px]">®</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9 text-[14px] font-medium text-black/70">
          {desktop.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative py-1 transition-colors hover:text-black after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-black after:transition-all after:duration-300 ${isActive ? "text-black after:w-full" : "after:w-0 hover:after:w-full"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="rounded-full border border-black/15 px-4 sm:px-5 py-2 text-[13px] font-semibold transition-all hover:bg-black hover:text-white hover:border-black"
          >
            Login
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/15 transition-colors hover:bg-black hover:text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className="lg:hidden overflow-hidden border-t border-black/5 transition-[max-height,opacity] duration-300 ease-out"
        style={{ maxHeight: open ? 360 : 0, opacity: open ? 1 : 0 }}
      >
        <nav className="mx-auto flex max-w-site flex-col px-4 sm:px-6 py-3">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between py-3 text-[17px] font-medium border-b border-black/5 last:border-0 transition-colors ${isActive ? "text-skyro" : "text-black/80 hover:text-black"}`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <ArrowUpRight size={18} className={isActive ? "text-skyro" : "text-black/30"} />
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
