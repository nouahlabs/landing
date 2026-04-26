import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
}

const logoLetters = ["N", "O", "U", "A", "H", "."];

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Nouah Labs"
      className={cn(
        "inline-flex items-center font-display text-lg font-semibold leading-none text-text sm:text-xl",
        className
      )}
    >
      <span aria-hidden="true" className="flex items-center gap-[0.34em]">
        {logoLetters.map((letter, index) => (
          <span key={`${letter}-${index}`}>{letter}</span>
        ))}
      </span>
    </Link>
  );
}
