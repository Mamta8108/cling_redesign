import { reviews } from "../data/content";
import "./Testimonials.css";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="reviews" className="section section--tint">
      <div className="container">
        <h2 className="section__title">What clients say</h2>

        <div className="reviews">
          {reviews.map((review) => (
            <figure key={review.name} className="review">
              <blockquote className="review__quote">
                <p>{review.quote}</p>
              </blockquote>
              <figcaption className="review__author">
                {review.photo ? (
                  <img
                    src={review.photo}
                    alt=""
                    loading="lazy"
                    className="review__avatar"
                  />
                ) : (
                  <span className="review__avatar review__avatar--initials" aria-hidden="true">
                    {getInitials(review.name)}
                  </span>
                )}
                <span>
                  <strong className="review__name">{review.name}</strong>
                  {review.role && (
                    <span className="review__role">{review.role}</span>
                  )}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}