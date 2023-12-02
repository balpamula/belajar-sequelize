const { body, validationResult } = require("express-validator");

// Data validation using express-validator
const bookValidator = [
  body("title").notEmpty().withMessage("Judul tidak boleh kosong"),
  body("description").notEmpty().withMessage("Deskripsi tidak boleh kosong"),
  body("published")
    .notEmpty()
    .withMessage("Publish tidak boleh kosong")
    .isBoolean()
    .withMessage("Published harus bertipe boolean"),
];

const runValidaton = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Bad Request",
      errors: errors.array().map((error) => error.msg),
    });
  }
  next();
};

module.exports = {
  bookValidator,
  runValidaton,
};
