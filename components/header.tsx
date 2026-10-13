"use client";

import { useTerminalWindow } from "@/components/terminal-window";
import { cn } from "@/lib/utils";

const navLinks: { href: string; label: string; accent?: boolean }[] = [
  { href: "#work", label: "./work" },
  { href: "#experience", label: "./experience" },
  { href: "#writing", label: "./writing" },
  { href: "#contact", label: "./contact", accent: true },
];

function WindowDot({
  label,
  color,
  onClick,
  disabled,
  pulse,
}: {
  label: string;
  color: string;
  onClick: () => void;
  disabled?: boolean;
  pulse?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      // 24px hit areas keep the 10px dots above the WCAG 2.2 target-size
      // minimum; the row's negative margin keeps the first dot on the edge.
      className="group grid size-6 cursor-pointer place-items-center disabled:cursor-not-allowed"
    >
      <span
        className={cn(
          "size-2.5 rounded-full transition-[filter] duration-150 ease-out",
          disabled ? "bg-line-strong" : `${color} group-hover:brightness-125`,
          pulse && !disabled && "animate-pulse-ring"
        )}
      />
    </button>
  );
}

export function Header() {
  const { maximized, maximize, restore, close } = useTerminalWindow();

  return (
    <header className="border-line bg-bg sticky top-0 z-40 flex flex-wrap items-center justify-between gap-y-3 border-b px-[22px] py-4 font-mono text-[13px] md:px-9">
      <div className="flex items-center">
        <div className="-mx-1.75 flex items-center">
          <WindowDot label="Close terminal" color="bg-dot-close" onClick={close} />

          <WindowDot
            label="Minimize to normal size"
            color="bg-dot-minimize"
            onClick={restore}
            disabled={!maximized}
          />

          <WindowDot
            label="Maximize terminal"
            color="bg-dot-maximize"
            onClick={maximize}
            disabled={maximized}
            pulse
          />
        </div>

        <span className="text-[#8a8a8a] ml-2 hidden sm:inline">olutunde.dev — zsh</span>
      </div>

      <nav aria-label="Main navigation" className="flex flex-wrap gap-x-5 gap-y-2 md:gap-x-7">
        {navLinks.map(({ href, label, accent }) => (
          <a
            key={href}
            href={href}
            className={accent ? "text-accent" : "text-fg-mute hover:text-accent"}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
