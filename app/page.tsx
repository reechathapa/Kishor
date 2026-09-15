import { Band } from "@/components/Band";
import { Build } from "@/components/Build";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { News } from "@/components/News";
import { Services } from "@/components/Services";
import { Strategy } from "@/components/Strategy";
import { Testimonials } from "@/components/Testimonials";
import { ThinkPricing } from "@/components/ThinkPricing";
import { WhyUs } from "@/components/WhyUs";
import { Work } from "@/components/Work";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strategy />
        <Build />
        <Work />
        <WhyUs />
        <Services />
        <How />
        <Faq />
        <ThinkPricing />
        <Testimonials />
        <Band />
        <News />
      </main>
      <Footer />
    </>
  );
}
