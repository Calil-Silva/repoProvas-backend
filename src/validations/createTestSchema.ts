import Joi from 'joi';

const createParamsSchema = Joi.object({
    name: Joi.string().trim().min(1).required(),
    category: Joi.string().trim().min(1).required(),
    professor: Joi.string().trim().min(1).required(),
    subject: Joi.string().trim().min(1).required(),
    link: Joi.string().trim().min(1).required(),
    period: Joi.string().trim().min(1).required(),
});

const generateParamsSchema = Joi.object({
    periodsNames: Joi.array().items(Joi.string().trim().min(1).required()),
    categoriesNames: Joi.array().items(Joi.string().trim().min(1).required()),
    professorsBySubject: Joi.array().items(
        Joi.object({
            professor: Joi.string().trim().min(1).required(),
            subject: Joi.string().trim().min(1).required(),
        }),
    ),
});

export { createParamsSchema, generateParamsSchema };
