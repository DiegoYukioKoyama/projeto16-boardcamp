//*Libraries
import Joi from "joi";

export const customerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(11).required(),
    cpf: Joi.string().pattern(/^[0-9]{11}$/).required(),
    birthday: Joi.string().pattern(/^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/).required(),
})