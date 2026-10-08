import { team } from "../data/content";
import getInitials from "../utils/getInitials";
import "./Team.css";

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="section__title">Leadership team</h2>
        <p className="section__lead">The people behind every project.</p>

        <ul className="team">
          {team.map((person) => (
            <li key={person.name} className="member">
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={person.name}
                  loading="lazy"
                  className="member__avatar"
                />
              ) : (
                <span className="member__avatar member__avatar--initials" aria-hidden="true">
                  {getInitials(person.name)}
                </span>
              )}
              <h3 className="member__name">{person.name}</h3>
              <p className="member__role">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}