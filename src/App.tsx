import { useState } from "react";
import { Navbar, Footer } from "./components/Layout";
import {
  Hero,
  FeatureCards,
  WhyEarthing,
  Applications,
  Solutions,
  QualitySection,
  CTA,
} from "./components/Sections";
import { ProductGrid } from "./components/Products";
import { Contact } from "./components/Contact";

export default function App() {
  const [enquiry, setEnquiry] = useState("General project enquiry");
  function enquire(product: string) {
    setEnquiry(product);
    document.getElementById("contact")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    window.setTimeout(
      () =>
        document.getElementById("contact-name")?.focus({ preventScroll: true }),
      100,
    );
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <FeatureCards />
        <WhyEarthing />
        <ProductGrid onEnquire={enquire} />
        <Applications />
        <Solutions />
        <QualitySection />
        <CTA />
        <Contact enquiry={enquiry} setEnquiry={setEnquiry} />
      </main>
      <Footer />
    </>
  );
}
