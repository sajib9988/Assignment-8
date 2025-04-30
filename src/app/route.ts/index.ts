import express from 'express';
import { customerRoutes } from '../modules/customer/customer.route';
import { bikeRoutes } from '../modules/bike/bike.route';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/customer',
        route: customerRoutes
    },
    {
        path: '/bike',
        route: bikeRoutes
    },
    
];

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router;