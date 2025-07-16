import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import WhyChooseUs from "@/components/why-choose-us";
import Services from "@/components/services";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-light-gray">
      <Navigation />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
