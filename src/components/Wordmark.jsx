import { ArrowUpRight } from "lucide-react";

export default function Wordmark({ dark = false }) {
  const main = dark ? "text-white" : "text-black";
  const dot = dark ? "text-white/45" : "text-black/40";
  return (
    <span className={`inline-flex items-baseline font-bold tracking-tight ${main}`} style={{ fontSize: "clamp(18px,1.4vw,26px)" }}>
      <span>p</span>
      <ArrowUpRight strokeWidth={3} className="text-skyro -mx-[1px]" style={{ width: "0.92em", height: "0.92em", transform: "translateY(0.06em)" }} />
      <span>kyro</span>
      <span className={dot}>.labs</span>
    </span>
  );
}
