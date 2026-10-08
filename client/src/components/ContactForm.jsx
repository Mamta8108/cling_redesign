import useContactForm from "../hooks/useContactForm";

export default function ContactForm() {
  const { values, errors, status, feedback, handleChange, handleSubmit } =
    useContactForm();

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {props.as === "textarea" ? (
        <textarea
          id={name} name={name} rows="5"
          value={values[name]} onChange={handleChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
        />
      ) : (
        <input
          id={name} name={name} type={props.type || "text"}
          autoComplete={props.autoComplete}
          value={values[name]} onChange={handleChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
        />
      )}
      {errors[name] && (
        <p id={`${name}-error`} className="field__error">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {field("name", "Full name", { autoComplete: "name" })}
      {field("email", "Email", { type: "email", autoComplete: "email" })}
      {field("phone", "Phone (optional)", { type: "tel", autoComplete: "tel" })}
      {field("message", "How can we help?", { as: "textarea" })}

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <p className={`form__feedback form__feedback--${status}`} role="status">
        {feedback}
      </p>
    </form>
  );
}