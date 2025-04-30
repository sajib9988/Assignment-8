import { Router } from "express";
import { customerController } from "./customer.controller";
const router = Router();

router.post("/", customerController.createCustomer);



export const customerRoutes = router;