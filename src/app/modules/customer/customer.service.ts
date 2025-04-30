import { prisma } from "../../middleware/prisma";


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



export const CustomerService = {
    createCustomer
}