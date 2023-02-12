//*Libraries
import { Router } from "express";

//*Controllers
import { getAllCustomers, registerCustomer } from "../controllers/CostumersControllers.js";

//*Middlewares
import {validateSchema} from "../middleware/SchemaMiddleware.js"


//*Schemas
import { customerSchema } from "../Schema/customersSchema.js";


const customersRouter = Router();

customersRouter.get("/customers", getAllCustomers);
customersRouter.post("/customers", validateSchema(customerSchema), registerCustomer);

export default customersRouter;