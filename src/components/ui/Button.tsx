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
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-text bg-text text-card shadow-sm hover:-translate-y-0.5 hover:bg-text-secondary",
  secondary:
    "border border-border-strong bg-card text-text hover:-translate-y-0.5 hover:border-text hover:bg-card-muted",
  ghost: "text-text hover:bg-card-muted hover:text-text",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/45 disabled:cursor-not-allowed disabled:opacity-60",
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
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
