import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
