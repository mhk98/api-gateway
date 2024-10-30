import { Request, response } from "express";
import { IGenericResponse } from "../../interfaces/common";
import { CoreService as HttpService } from "../../shared/axios";


const insertIntoDB = async(req:Request):Promise<IGenericResponse> => {

    const response:IGenericResponse = await HttpService.post('/academic-departments', req.body, {

        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response;
}


const getAllFromDB = async(req:Request):Promise<IGenericResponse> => {

    const response:IGenericResponse = await HttpService.get('/academic-departments', {

        headers: {
            Authorization: req.headers.authorization
        }
    })

    return response
}


const updateOneIntoDB = async(req:Request):Promise<IGenericResponse> => {
const response:IGenericResponse = await HttpService.patch('/academic-departments', {
    headers: {
        Authorization: req.headers.authorization
    }
})

return response;
}

const deleteDataById = async(req:Request):Promise<IGenericResponse> => {
const response:IGenericResponse =  await HttpService.delete('/academic-departments', {

    headers: {
        Authorization: req.headers.authorization
    }
})

return response;
}

export const AcademicDepartmentService = {
    insertIntoDB,
    getAllFromDB,
    updateOneIntoDB,
    deleteDataById
}