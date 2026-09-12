import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { contactDetails } from "../site";
const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Products", "#products"],
  ["Solutions", "#solutions"],
  ["Industries", "#industries"],
  ["Contact", "#contact"],
];
export function Logo() {
  return (
    <a
      className="logo"
      href="#home"
      aria-label="Earthing Truss™ home"
    >
      <span className="logo-mark">
        <Icon name="ground" size={29} />
      </span>
      <span>
        Earthing <span className="gold">Truss™</span>
        <small>EARTHING SOLUTIONS</small>
      </span>
    </a>
  );
}
export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="header" ref={header}>
      <div className="container nav-wrap">
        <Logo />
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="navigation"
          aria-label="Main navigation"
          className={open ? "navigation open" : "navigation"}
          onBlur={(event) => {
            if (
              !event.currentTarget.contains(event.relatedTarget) &&
              event.relatedTarget !== toggle.current
            )
              setOpen(false);
          }}
        >
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="button button-gold nav-quote"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Enquire Now <Icon name="arrowUp" size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Earthing Solutions for a Safer Tomorrow
            </p>
            <span className="footer-tag">
              <span className="status-dot" /> Earthing Today, Safer Tomorrow
            </span>
          </div>
          <div>
            <h3>Explore</h3>
            {navigation.slice(0, 3).map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
            <a href="#industries">Industries</a>
            <a href="#contact">Contact us</a>
          </div>
          <div>
            <h3>Our products</h3>
            <a href="#products">Copper bonded rods</a>
            <a href="#products">GI electrodes</a>
            <a href="#products">Strips & conductors</a>
            <a href="#products">Clamps & accessories</a>
          </div>
          <div>
            <h3>Solutions</h3>
            <a href="#solutions">Electrical earthing</a>
            <a href="#solutions">Lightning protection</a>
            <a href="#solutions">Solar & telecom</a>
            <a href="#solutions">Industrial</a>
            <a href="#solutions">Commercial</a>
            <a href="#solutions">Residential</a>
          </div>
          <div>
            <h3>Let’s connect</h3>
            <a href="#contact">
              Start a project enquiry <Icon name="arrowUp" size={14} />
            </a>
            {contactDetails.map(({ title, value, href }) => (
              <a className="footer-contact" key={value} href={href}>
                {title}: {value}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Since 2015 · © {new Date().getFullYear()} Earthing Truss™. All
            rights reserved.
          </p>
          <span>
            BUILT FOR A SAFER TOMORROW <Icon name="ground" size={18} />
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
