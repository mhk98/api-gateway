import express from "express"
import { AcademicDepartmentController } from "./academicDepartment.controller"
const router = express.Router()


router.post('/', AcademicDepartmentController.insertIntoDB)
router.get('/', AcademicDepartmentController.getAllFromDB)
router.patch('/', AcademicDepartmentController.updateOneIntoDB)
router.delete('/', AcademicDepartmentController.deleteDataById)

export const academicDepartmentRoutes = router