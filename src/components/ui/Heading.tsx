import { cn } from "@/lib/utils";

interface HeadingProps {
  level?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
}

export function Heading({ level = "h2", children, className }: HeadingProps) {
  const Tag = level;

  const styles = {
    h1: "text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-[family-name:var(--font-plus-jakarta)]",
    h2: "text-3xl font-bold tracking-tight md:text-4xl font-[family-name:var(--font-plus-jakarta)]",
    h3: "text-xl font-semibold tracking-tight md:text-2xl font-[family-name:var(--font-plus-jakarta)]",
    h4: "text-lg font-semibold tracking-tight font-[family-name:var(--font-plus-jakarta)]",
  };

  return <Tag className={cn(styles[level], className)}>{children}</Tag>;
}
