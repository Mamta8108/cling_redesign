import { useState } from "react";

const initial = { name: "", email: "", phone: "", message: "" };
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (values.phone && !/^[+\d][\d\s-]{6,14}$/.test(values.phone))
    errors.phone = "Please enter a valid phone number.";
  if (values.message.trim().length < 10)
    errors.message = "Please write at least 10 characters.";
  return errors;
}

export default function useContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Something went wrong. Please try again.");

      setStatus("success");
      setFeedback("Thanks! We will reply within one working day.");
      setValues(initial);
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof TypeError
          ? "Could not reach the server. Please try again later or call us."
          : err.message
      );
    }
  };

  return { values, errors, status, feedback, handleChange, handleSubmit };
}