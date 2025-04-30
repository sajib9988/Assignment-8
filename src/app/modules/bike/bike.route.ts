import { Router } from "express";
import { bikeController } from "./bike.controller";
import Validator from "../../middleware/validator";
import { bike_validation_schema } from "./bike.validation";


const router = Router();


router.post("/", Validator( bike_validation_schema.createBike), bikeController.bikeCreate);

router.get("/", bikeController.getAllBike);

router.get("/:id", bikeController.getSingleBike);




export const bikeRoutes = router;
