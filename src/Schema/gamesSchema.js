import Joi from "joi";

export const registerGamesSchema = Joi.object({
    name: Joi.string().min(1).max(20).required(),
    image: Joi.string().pattern(/^[a-zA-Z0-9-_]+[:./\\]+([a-zA-Z0-9 -_./:=&"'?%+@#$!])+$/).required(),
    stockTotal: Joi.number().min(1).required(),
    pricePerDay: Joi.number().min(1).required(),
})