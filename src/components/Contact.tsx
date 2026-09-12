import { useState } from "react";
import type { FormEvent } from "react";
import { products } from "../data";
import { Icon } from "./Icon";
import { contactDetails } from "../site";
import { SectionHeading } from "./Sections";
export function Contact({
  enquiry,
  setEnquiry,
}: {
  enquiry: string;
  setEnquiry: (value: string) => void;
}) {
  const [summary, setSummary] = useState("");
  const [summaryProduct, setSummaryProduct] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `PROJECT ENQUIRY — EARTHING TRUSS™\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nCompany: ${data.get("company") || "Not provided"}\nInterested in: ${enquiry}\n\nProject requirements:\n${data.get("message")}`;
    setSummary(text);
    setSummaryProduct(enquiry);
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([summary], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "earthing-truss-project-enquiry.txt";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <div>
          <SectionHeading
            eyebrow="LET’S TALK"
            title="Contact Us"
            text="Tell us what you’re building. Start with a product, a drawing or a simple question — and take the next step toward a safer system."
          />
          <div className="contact-cards">
            {contactDetails.map(({ icon, title, value, href }) => (
              <div className="contact-card" key={title}>
                <span>
                  <Icon name={icon} size={21} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{href ? <a href={href}>{value}</a> : value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="contact-placeholder">
            <span className="status-dot" />
            Call us to discuss your earthing products and project requirements.
          </p>
        </div>
        <div className="contact-form-card">
          <div className="form-heading">
            <h3>Let’s get your project grounded.</h3>
            <p>Share a few details to prepare your enquiry.</p>
          </div>
          <form
            onSubmit={submit}
            onChange={() => {
              if (summary) setSummary("");
            }}
          >
            <div className="form-grid">
              <label htmlFor="contact-name">
                Full name <span>*</span>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                />
              </label>
              <label htmlFor="contact-email">
                Email address <span>*</span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  maxLength={254}
                />
              </label>
              <label htmlFor="contact-phone">
                Phone number
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  maxLength={30}
                />
              </label>
              <label htmlFor="contact-company">
                Company
                <input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  placeholder="Company name"
                  maxLength={150}
                />
              </label>
            </div>
            <label htmlFor="contact-product">
              I’m interested in
              <select
                id="contact-product"
                name="product"
                value={enquiry}
                onChange={(event) => setEnquiry(event.target.value)}
              >
                <option>General project enquiry</option>
                {products.map((p) => (
                  <option key={p.id}>{p.name}</option>
                ))}
                <option>Complete earthing solution</option>
              </select>
            </label>
            <label htmlFor="contact-message">
              Project requirements <span>*</span>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your project, quantities or specifications…"
                rows={4}
                required
                maxLength={4000}
              />
            </label>
            <p className="form-note">
              Prepare and download your enquiry, or call us directly. This form
              does not send your details.
            </p>
            <button className="button button-gold form-submit" type="submit">
              Prepare Enquiry <Icon name="arrowUp" size={18} />
            </button>
            <div aria-live="polite">
              {summary && summaryProduct === enquiry && (
                <div className="enquiry-result">
                  <h4>
                    <Icon name="check" size={18} /> Your enquiry is ready
                  </h4>
                  <p>
                    No message has been sent. Download your enquiry for reference
                    when discussing your requirements with us.
                  </p>
                  <button
                    type="button"
                    className="button button-outline"
                    onClick={download}
                  >
                    Download enquiry <Icon name="arrow" size={17} />
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
