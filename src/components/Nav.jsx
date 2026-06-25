import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Wordmark from "./Wordmark.jsx";

const DESKTOP_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
];

const MOBILE_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-black/[0.06]">
      <div className="mx-auto flex h-16 sm:h-[72px] max-w-site 2xl:max-w-site-wide items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-1" onClick={() => setOpen(false)}>
          <Wordmark />
          <span className="text-black/40 text-[10px] font-medium translate-y-[-4px]"></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9 text-[14px] font-medium text-black/70">
          {DESKTOP_LINKS.map((l) => (
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
            className="hidden sm:block rounded-full bg-black text-white px-5 py-2 text-[13px] font-semibold transition-all hover:bg-skyro"
          >
            Contact Us
          </button>
          
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center text-black hover:text-skyro lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>

    {/* mobile drawer backdrop */}
    {open && (
      <div
        className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm lg:hidden transition-opacity duration-300"
        onClick={() => setOpen(false)}
      />
    )}

    {/* mobile drawer menu */}
    <div
      className={`fixed top-0 right-0 bottom-0 z-50 w-[75vw] max-w-[280px] bg-white h-full shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="flex justify-end p-5">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="p-1 text-black hover:text-skyro transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-9 pt-6 text-right">
        {MOBILE_LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-[25px] font-semibold transition-colors ${
                isActive ? "text-skyro" : "text-black/85 hover:text-black"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </>
);
}
