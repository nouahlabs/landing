import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function CallToAction() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-3xl bg-dark px-8 py-16 text-center lg:px-16 lg:py-20">
            <Heading level="h2" className="text-white">
              Let&apos;s build your next product
            </Heading>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-400">
              Have an idea for an app or website? We&apos;d love to hear about
              it. Tell us what you&apos;re building and let&apos;s see if
              we&apos;re the right fit.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                className="bg-accent text-white hover:bg-accent-light"
              >
                Start a Project
              </Button>
              <Button
                variant="secondary"
                href="/work"
                className="border-white/20 text-white hover:bg-white hover:text-dark"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
