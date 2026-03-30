import type { Transition, Variants } from "framer-motion";

export const EASING = {
  standard: [0.4, 0, 0.2, 1] as const,
  backOut: [0.34, 1.56, 0.64, 1] as const,
};

export const pageTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const cardHoverVariants = {
  scale: 1.02,
  boxShadow: "0px 0px 20px rgba(0, 112, 243, 0.2)",
};

export const cardTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 10,
};

export const viewportConfig = {
  once: true,
  amount: 0.2,
};
