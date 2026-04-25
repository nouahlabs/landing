import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
