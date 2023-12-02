const Joi = require("joi");

// Data validation using Joi
const schema = {
  bookCreate: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    published: Joi.boolean().required(),
  }),
  bookUpdate: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    published: Joi.boolean().required(),
  }),
};

module.exports = schema;
