import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  accentClassName?: string;
  href?: string;
}

export function Logo({ className, accentClassName, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("font-display text-xl font-semibold tracking-tight", className)}
    >
      Nouah
      <span className={cn("text-accent-foreground", accentClassName)}>
        Labs
      </span>
    </Link>
  );
}
