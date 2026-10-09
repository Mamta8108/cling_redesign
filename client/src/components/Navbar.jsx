import { useState } from "react";
import { navLinks } from "../data/content";
import "./Navbar.css";

export default function Navbar(){
  const [open,setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
 <a href="#top" className="navbar__logo">
  Cling{" "}
  <span>Info Tech</span>
</a>

       <button
        className="navbar__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="main-nav"
       onClick={() => setOpen(!open)}
        >
          
          {open ? "✕" : "☰"}
        </button>

        <nav
          id="main-nav"
          className={`navbar__links ${open ? "navbar__links--open" : ""}`}
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn" onClick={closeMenu}>
            Contact us
          </a>
        </nav>

      </div>
    </header>
  )

}