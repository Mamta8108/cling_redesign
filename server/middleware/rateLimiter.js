const rateLimit = require("express-rate-limit");

exports.contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many messages from this network. Please try again later." },
});