import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

// Wraps any element so it fades + slides in once it enters the viewport.
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 22,
  x = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : undefined}
      transition={{ duration, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Stagger children: wrap siblings in this, give each child a `variants` of `staggerItem`.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

// Thin wrapper for scroll-triggered stagger groups.
export function StaggerList({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Consistent page-level enter / exit transition.
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.28, ease }}
      style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}
    >
      {children}
    </motion.div>
  );
}

// Re-export motion so callers don't need to import framer-motion directly.
export { motion };
