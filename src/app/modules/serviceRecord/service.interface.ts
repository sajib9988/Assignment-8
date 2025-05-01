export interface ICreateService {
    bikeId: string;
    serviceDate: Date;
    description: string;
    status: "pending" | "in_progress" | "done"
}