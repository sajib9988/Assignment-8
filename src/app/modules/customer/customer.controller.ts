import { Request, Response } from "express";
import { CustomerService } from "./customer.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
export const createCustomer = async (req: Request, res: Response) => {
  const result = await CustomerService.createCustomer(req.body);
 
  sendResponse(res,{
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer created successfully",
    data: result,
  })

};



export const customerController = {
  createCustomer,  
}