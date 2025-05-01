import { z } from "zod";


const create_service = z.object({
    bikeId: z.string(),
    serviceDate: z.string(),
    description: z.string(),
    status: z.enum(["pending", "in_progress", 'done'])
})
const update_service = z.object({
    completionDate: z.string().optional()
}).strict()

export const service_validation = {
    create_service,
    update_service
}