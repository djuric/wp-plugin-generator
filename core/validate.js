const Joi = require("@hapi/joi");

function validate(data) {
  return Joi.object({
    pluginName: Joi.string().max(100).required(),
    pluginSlug: Joi.string()
      .min(1)
      .max(50)
      .pattern(new RegExp("^[a-z0-9-]+$"))
      .required(),
    pluginUri: Joi.string().uri().max(100).required(),
    authorName: Joi.string().max(100).required(),
    authorEmail: Joi.string().email().required(),
    authorUri: Joi.string().uri().max(100).required(),
  }).validate(data);
}

module.exports = validate;
