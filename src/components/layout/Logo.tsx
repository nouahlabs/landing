import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="text-xl font-bold tracking-tight font-[family-name:var(--font-plus-jakarta)]">
      Nouah<span className="text-accent">Labs</span>
    </Link>
  );
}
