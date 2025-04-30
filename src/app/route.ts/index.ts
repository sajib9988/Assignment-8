import express from 'express';
import { customerRoutes } from '../modules/customer/customer.route';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/customer',
        route: customerRoutes
    }
    
];

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router;