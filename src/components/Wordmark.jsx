import logo from "../assets/logo.png";

export default function Wordmark({ dark = false }) {
  return (
    <img
      src={logo}
      alt="pSkyro.labs"
      className="h-[22px] sm:h-[26px] w-auto object-contain select-none"
      style={dark ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}

