"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, isLocale, localizedPath } from "@/i18n/config";

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale = isLocale(segment) ? segment : defaultLocale;
  const t = getDictionary(locale);

  return (
    <div className="flex min-h-screen items-center">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <span className="font-display text-7xl font-semibold text-surface">
            {t.notFound.code}
          </span>
          <Heading level="h2" className="mt-4">
            {t.notFound.title}
          </Heading>
          <p className="mt-3 text-text-secondary">{t.notFound.body}</p>
          <div className="mt-8">
            <Button href={localizedPath("/", locale)}>{t.notFound.action}</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
