import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <h1 className="hero__title">Making your ideas happen.</h1>
        <p className="hero__text">
          Websites, mobile apps, ERP systems and digital marketing from one
          team. We have been building for businesses in India and abroad since
          2019.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--light">
            Start your project
          </a>
          <a href="#services" className="hero__link">
            See our services
          </a>
        </div>
      </div>
    </section>
  );
}