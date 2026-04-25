import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  accentClassName?: string;
}

export function Logo({ className, accentClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("font-display text-xl font-semibold tracking-tight", className)}
    >
      Nouah<span className={cn("text-accent", accentClassName)}>Labs</span>
    </Link>
  );
}
