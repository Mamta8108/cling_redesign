import { navLinks } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {year} Cling Info Tech Works Private Limited</p>

        <nav aria-label="Footer" className="footer__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a href="https://www.linkedin.com/company/cling-multi-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/clinginfotechworks/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
    </footer>
  );
}