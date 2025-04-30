import { prisma } from "../../middleware/prisma";
import { ICreateBike } from "./bike.interface";


const createBike= async (payload:ICreateBike) =>{
    const result = await prisma.bike.create({
        data:payload
    })
    return result
}



const getAllBike = async () => {
    const result = await prisma.bike.findMany()
    return result
}




const getSpecificBike = async (bikeId: string) => {
    const result = await prisma.bike.findUniqueOrThrow({
        where: {
             bikeId
        }
    })
    if (!result) {
        throw new Error("Bike not found !!")
    }
    return result
}

const getSingleBike = async (bikeId: string) => {
    const result = await prisma.bike.findUniqueOrThrow({
        where: {
            bikeId
        }
    })
    return result;
}



export const BikeService = {
    createBike,

    getAllBike,
    getSingleBike,

}