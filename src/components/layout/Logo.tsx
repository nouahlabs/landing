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
      className={cn(
        "inline-flex items-center gap-3 font-display text-base font-semibold text-text",
        className
      )}
    >
      <span aria-hidden="true" className="relative flex h-5 w-8">
        <span className="absolute left-0 top-1/2 h-3 w-5 -translate-y-1/2 -rotate-[35deg] rounded-full bg-text" />
        <span className="absolute right-0 top-1/2 h-3 w-5 -translate-y-1/2 -rotate-[35deg] rounded-full bg-text" />
      </span>
      <span>
        Nouah
        <span className={cn("text-text-secondary", accentClassName)}>
          Labs
        </span>
      </span>
    </Link>
  );
}
