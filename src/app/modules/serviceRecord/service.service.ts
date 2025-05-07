
import { prisma } from "../../middleware/prisma"
import { subDays } from "date-fns"


const createService = async (payload: any) => {
   
    const bikeExist = await prisma.bike.findUnique({
      where: {
        bikeId: payload.bikeId, 
      },
    });
  
    if (!bikeExist) {
      throw new Error("Not Found Bike !!");
    }
  

    const service = await prisma.serviceRecord.create({
      data: {
        bikeId: payload.bikeId,
        serviceDate: payload.serviceDate,
        description: payload.description,

      },
    });
  
    return service;
  };


const getAllService = async () => {
    try {
        const service = await prisma.serviceRecord.findMany()
        return service
    } catch (error) {
        throw new Error("Error fetching service records")
    }
}


const getSingleService = async (serviceId:string) => {
    try {
        const service = await prisma.serviceRecord.findUnique({ 
            
            where: {
             
             
                serviceId
        
        
            } 
            
            
            })
        return service
    } catch (error) {
        throw new Error("Error fetching service record")
    }
}


const updateService = async (serviceId:string, payload:any) => {
    const date = new Date().toISOString()
    const isServiceExist = await prisma.serviceRecord.findFirst({
        where: {
            serviceId
        }
    });
    if (!isServiceExist) {
        throw new Error("Service not found !!")
    }
    const result = await prisma.serviceRecord.update({
        where: {
            serviceId
        },
        data: {
            completionDate: payload?.completionDate || date,
            status: "done"
        }
    })
    return result;
}   


const overDueService = async()=>{
    const sevenDaysAgo = subDays(new Date(), 7);
    console.log("sevendayago",sevenDaysAgo)
    const result = await prisma.serviceRecord.findMany({
        where: {
            status: { in: ["pending", "in_progress"] },
            serviceDate: { lt: sevenDaysAgo }

        }
    })

    return result;
}


export const BikeServiceRecord = {
    createService,
    getAllService,
    getSingleService,
    updateService,
    overDueService
}