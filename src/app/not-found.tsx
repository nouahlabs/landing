import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <span className="text-7xl font-bold text-surface font-[family-name:var(--font-plus-jakarta)]">
            404
          </span>
          <Heading level="h2" className="mt-4">
            Page not found
          </Heading>
          <p className="mt-3 text-text-secondary">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/">Go Home</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
