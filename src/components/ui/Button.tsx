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
  primary: "bg-accent text-dark shadow-sm hover:bg-accent-light",
  secondary:
    "border border-border bg-white text-text hover:border-accent hover:bg-lavender/45",
  ghost: "text-text hover:bg-lavender/45 hover:text-text",
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
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40",
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
