export function validateSchema(schema) {
    return (req, res, next) => {

        const body = req.body

        const { error } = schema.validate(body, { abortEarly: false })

        if (error) {
            const errorMessages = error.details.map(err => err.message)
            return res.status(400).send(errorMessages)
        }
        next()
    }
}