import { clients } from "../data/content";
import "./Clients.css";

export default function Clients() {
  return (
    <section id="clients" className="section section--tint">
      <div className="container">
        <h2 className="section__title">
          Trusted by businesses across industries
        </h2>
        <p className="section__lead">
          Real estate, education, shipping, finance, retail and more.
        </p>

        <ul className="clients">
          {clients.map((client) => (
            <li key={client.name} className="client">
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="client__logo"
                />
              ) : (
                <span className="client__name">{client.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}