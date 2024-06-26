import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string()
    .uri({ scheme: [/postgres/] })
    .required(),
});
