//*Libraries
import { Router } from "express";

//*Controllers
import { getAllCustomers, getCustomerById, registerCustomer } from "../controllers/CostumersControllers.js";

//*Middlewares
import {validateSchema} from "../middleware/SchemaMiddleware.js"


//*Schemas
import { customerSchema } from "../Schema/customersSchema.js";


const customersRouter = Router();

customersRouter.get("/customers", getAllCustomers);
customersRouter.get("/customers/:id", getCustomerById);
customersRouter.post("/customers", validateSchema(customerSchema), registerCustomer);

export default customersRouter;