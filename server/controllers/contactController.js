const Contact = require("../models/Contact");

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const PHONE_RE = /^[+\d][\d\s-]{6,14}$/;

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, phone = "", message } = req.body || {};

    const errors = {};
    if (typeof name !== "string" || !name.trim()) errors.name = "Name is required.";
    if (typeof email !== "string" || !EMAIL_RE.test(email)) errors.email = "A valid email is required.";
    if (phone && (typeof phone !== "string" || !PHONE_RE.test(phone))) errors.phone = "Phone number is not valid.";
    if (typeof message !== "string" || message.trim().length < 10) errors.message = "Message must be at least 10 characters.";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: "Please check the form and try again.", errors });
    }

    await Contact.create({ name, email, phone, message });
    res.status(201).json({ message: "Message received." });
  } catch (err) {
    next(err);
  }
};