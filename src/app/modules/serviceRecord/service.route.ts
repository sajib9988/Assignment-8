import { Router } from "express";
import Validator from "../../middleware/validator";
import { service_validation } from "./service.validation";
import { serviceController } from "./service.cotroller";

const router = Router()

router.get('/status', serviceController.overDueService)
router.post('/', Validator(service_validation.create_service), serviceController.createServiceRecord)
router.get('/', serviceController.getAllServiceRecord)
router.get('/:serviceId', serviceController.getSpecificServiceRecord)
router.put('/:serviceId', Validator(service_validation.update_service), serviceController.updateServiceRecord)



export const serviceRoutes = router