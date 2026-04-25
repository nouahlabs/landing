import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white shadow-sm hover:bg-dark",
  secondary:
    "border border-border bg-white text-dark hover:border-accent hover:text-accent",
  ghost: "text-dark hover:bg-surface hover:text-accent",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md px-5 py-3 font-display text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30",
    variants[variant],
    className
  );

  if (href) {
    const external = href.startsWith("http");

    if (external) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
