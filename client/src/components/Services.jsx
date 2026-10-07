import { services } from "../data/content";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section__title">What we build</h2>
        <p className="section__lead">
          Everything you need to launch and grow online, from first design to
          daily operations.
        </p>

        <ul className="services">
          {services.map((service, index) => (
            <li key={service.title} className="service-card">
              <span className="service-card__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}