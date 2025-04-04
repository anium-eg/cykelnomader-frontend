import { Employee } from "./Employee"
import { UserRole } from "./UserRoles"

export interface LoginRequest{
    loginId:string,
    plainTextPassword:string
    roleClaim:UserRole
}

export interface LoginSuccessfulResponse{
    token:string
    employee:Employee
}