import { NextFunction, Request, Response } from "express";
import sendResponse from "../../shared/response";
import { AcademicDepartmentService } from "./academicDepartment.service";

const insertIntoDB = async(req:Request, res:Response, next:NextFunction) => {

    try {
    const result = await AcademicDepartmentService.insertIntoDB(req)
    sendResponse(res, result)
        
    } catch (err) {
        next(err)
    }
}


const getAllFromDB = async(req:Request, res:Response, next:NextFunction) => {
try {
    const result = await AcademicDepartmentService.getAllFromDB(req)
sendResponse(res, result)
} catch (err) {
    next(err)
}
}


const updateOneIntoDB = async(req:Request, res:Response, next:NextFunction) => {
const result = await AcademicDepartmentService.updateOneIntoDB(req)


sendResponse(res, result)
}

const deleteDataById = async(req:Request, res:Response, next:NextFunction) => {
const result = await AcademicDepartmentService.deleteDataById(req)


sendResponse(res, result)
}


export const AcademicDepartmentController = {
    insertIntoDB,
    getAllFromDB,
    updateOneIntoDB,
    deleteDataById
}