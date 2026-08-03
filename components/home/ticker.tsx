const TICKER_TEXT =
  "AVAILABLE FOR WORK ✦ 97% FASTER CORE FLOWS ✦ 2S → 50MS ✦ −90% MEMORY ✦ WCAG 100% ✦ REACT · NEXT.JS · TYPESCRIPT ✦\u00A0";

export function Ticker() {
  return (
    <div aria-hidden="true" className="bg-accent text-bg overflow-hidden py-[13px]">
      <div className="animate-marquee flex font-mono text-[13px] font-bold tracking-[1.5px] whitespace-nowrap">
        <span>{TICKER_TEXT}</span>
        <span>{TICKER_TEXT}</span>
      </div>
    </div>
  );
}
