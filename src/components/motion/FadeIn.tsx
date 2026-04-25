"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const yMap = { up: 24, down: -24, none: 0 };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yMap[direction] }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yMap[direction] }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
