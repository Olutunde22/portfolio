"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = Omit<
  ComponentProps<typeof motion.div>,
  "initial" | "whileInView" | "viewport" | "transition" | "children"
> & {
  children: ReactNode;
  delay?: number;
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  once = true,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion
    ? { y: 0, filter: "blur(0px)", opacity: 1 }
    : { y: 14, filter: "blur(8px)", opacity: 1 };

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
