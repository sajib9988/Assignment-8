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

const getAllCustomer = async (req: Request, res: Response) => {
  const result = await CustomerService.getAllCustomer();  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
};


const getSpecificCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params;
  const result = await CustomerService.getSpecificCustomer(customerId);  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "single Customer fetched successfully",
    data: result,
  });
};

const updateCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params; 
  const result = await CustomerService.updateCustomer(customerId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
};
    

const deleteCustomer = async (req: Request, res: Response) => {
  const { customerId } = req.params; 
  const result = await CustomerService.deleteCustomer(customerId);  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
    data: result,
  });
};



export const customerController = {
  createCustomer,  
  getAllCustomer,
  getSpecificCustomer,
  updateCustomer,
  deleteCustomer,

}