exports.notFound = (req, res) => {
  res.status(404).json({ message: "Route not found." });
};

exports.errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong on our side. Please try again later." });
};