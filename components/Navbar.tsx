"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation">
      <a href="#" className="navbar-logo">
        mahir makar
      </a>
      <div className="navbar-links">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="navbar-link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
