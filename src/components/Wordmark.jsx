import logo from "../assets/logo.png";
import favicon from "../assets/favicon.png";

export default function Wordmark({ dark = false }) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5">
      <img
        src={favicon}
        alt="pSkyro.labs Icon"
        className="h-5 w-5 sm:h-6 sm:w-6 rounded-md object-contain select-none"
      />
      <img
        src={logo}
        alt="pSkyro.labs"
        className="h-[18px] sm:h-[21px] w-auto object-contain select-none"
        style={dark ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </div>
  );
}

