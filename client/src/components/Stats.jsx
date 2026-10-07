import { stats } from "../data/content";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="container">
      <dl className="stats">
        {stats.map((item) => (
          <div key={item.label} className="stats__item">
            <dd className="stats__value">{item.value}</dd>
            <dt className="stats__label">{item.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}