import { prisma } from "../../middleware/prisma";
import { IUpdateCustomer } from "./customer.interface";


const createCustomer = async (  data:{
    name: string;
    email: string;
    phone: string;
    
})=>{
  
    const  result =  await prisma.customer.create({
        data
    })

return result
}






const getAllCustomer =async() =>{
    const result = await prisma.customer.findMany()
  return result
    // console.log(result)
}









const getSpecificCustomer = async (customerId: string) => {
    const result = await prisma.customer.findUniqueOrThrow({
        where: {
            id: customerId
        }



    })
console.log(result)
    if (!result) {
        throw new Error("Customer not found !!")
    }
return result
}


const updateCustomer = async (customerId: string, payload: IUpdateCustomer) => {
    const isExistCustomer = await prisma.customer.findFirst({ where: { id: customerId } })
    if (!isExistCustomer) {
        throw new Error("Customer not found for update!!")
    }
    const result = await prisma.customer.update({
        where: {
            id: customerId
        },
        data: payload
    })
    return result

}

const deleteCustomer= async (customerId: string) => {
    const isExistCustomer = await prisma.customer.findFirst({
        where: {
            id: customerId
        }
    })
    if (!isExistCustomer) {
        throw new Error("Customer not found for delete !!")
    }
    await prisma.customer.delete({ where: { id: customerId } })
    return null
}


export const CustomerService = {
    createCustomer,
    getAllCustomer,
    getSpecificCustomer,
    updateCustomer,
    deleteCustomer
}