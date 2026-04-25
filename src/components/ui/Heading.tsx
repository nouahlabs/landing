import { cn } from "@/lib/utils";

interface HeadingProps {
  level?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level = "h2", children, className }: HeadingProps) {
  const Tag = level;

  const styles = {
    h1: "font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl",
    h2: "font-display text-3xl font-semibold tracking-tight md:text-4xl",
    h3: "font-display text-xl font-semibold tracking-tight md:text-2xl",
    h4: "font-display text-lg font-semibold tracking-tight",
  };

  return <Tag className={cn(styles[level], className)}>{children}</Tag>;
}
