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
import { whatsappOrderNumber } from "./site";

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
      {[whatsappOrderNumber, "917986704748"].map((number, index) => (
        <a
          key={number}
          className="whatsapp-float"
          style={{
            bottom: `calc(max(20px, env(safe-area-inset-bottom)) + ${index * 78}px)`,
          }}
          href={`https://wa.me/${number}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp: +91 ${number.slice(2)}`}
          title={`WhatsApp ${index + 1}: +91 ${number.slice(2)}`}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.47 0 .11 5.35.11 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.93 11.93 0 0 0 5.79 1.48h.01c6.58 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.18-3.48-8.42ZM12.06 21.82a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.9-9.92a9.85 9.85 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.75-1.66-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.71.22 1.36.19 1.87.11.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
          <span className="whatsapp-number" aria-hidden="true">
            {index + 1}
          </span>
        </a>
      ))}
    </>
  );
}
