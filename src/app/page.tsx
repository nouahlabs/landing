import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <CallToAction />
    </>
  );
}
