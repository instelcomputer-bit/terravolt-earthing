import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { contactDetails, socialProfiles } from "../site";
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
      aria-label="TerraVolt Earthing Solutions home"
    >
      <span className="logo-mark">
        <Icon name="ground" size={29} />
      </span>
      <span>
        TERRA<span className="gold">VOLT</span>
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
            Get a Quote <Icon name="arrowUp" size={17} />
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
              A stronger connection to earth.
              <br />A safer foundation for everything above it.
            </p>
            <span className="footer-tag">
              <span className="status-dot" /> GROUNDED IN PROTECTION
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
            <a href="#solutions">Industrial grounding</a>
          </div>
          <div>
            <h3>Let’s connect</h3>
            <a href="#contact">
              Start a project enquiry <Icon name="arrowUp" size={14} />
            </a>
            <p className="footer-contact">
              {contactDetails[0].value}
              <br />
              {contactDetails[2].value}
            </p>
            <p className="small">
              Business contact details and social profiles will be added before
              launch.
            </p>
            <div className="social-links">
              {socialProfiles.map((profile) =>
                profile.url ? (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.name} (opens in a new tab)`}
                  >
                    {profile.name}
                    <Icon name="arrowUp" size={13} />
                  </a>
                ) : (
                  <span
                    key={profile.name}
                    aria-disabled="true"
                    title="Business profile coming soon"
                  >
                    {profile.name}
                    <Icon name="arrowUp" size={13} />
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} TerraVolt Earthing Solutions. All
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
