const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalURL}`);
  res.status(404);
  next(error);
};

const errorHandler = () => {
  const statusCode = req.statusCode === 200 ? 500 : req.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === " production" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
