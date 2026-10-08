import ContactForm from "./ContactForm";
import { contact, offices } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section section--tint">
      <div className="container">
        <h2 className="section__title">Tell us about your idea</h2>
        <p className="section__lead">We reply within one working day.</p>

        <div className="contact">
          <ContactForm />

          <aside className="contact__info">
            <p>
              <strong>Call or WhatsApp</strong>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
            <p>
              <strong>Email</strong>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            {offices.map((office) => (
              <address key={office.city}>
                <strong>{office.city}</strong>
                {office.address}
              </address>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}