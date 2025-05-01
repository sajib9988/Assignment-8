import { Request, Response } from "express";
import { BikeServiceRecord } from "./service.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync";

const createServiceRecord = catchAsync(async (req: Request, res: Response) => {
    const data = req.body;
    const result = await BikeServiceRecord.createService(data);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "New Service Created successfully",
        data: result,
    })


 

})


const getAllServiceRecord = catchAsync(async (req: Request, res: Response) => {
    const result = await BikeServiceRecord.getAllService();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "service fetched successfully",
        data: result,
    })
})

const getSpecificServiceRecord = catchAsync(async (req: Request, res: Response) => {
    const { serviceId } = req.params;
    const result = await BikeServiceRecord.getSingleService(serviceId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "single Services fetched successfully",
        data: result,
    })
})

const updateServiceRecord = catchAsync(async (req: Request, res: Response) => {
    const { serviceId } = req.params;
    const result = await BikeServiceRecord.updateService(serviceId, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service updated successfully",
        data: result,
    })
})  


const overDueService= catchAsync(async (req: Request, res: Response) => {
    const result = await BikeServiceRecord.overDueService();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    })
})

export const serviceController = {
    createServiceRecord,    

    getAllServiceRecord,
    getSpecificServiceRecord,
    updateServiceRecord,
    overDueService
}