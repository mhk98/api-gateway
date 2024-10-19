import express from 'express'
import { AcademicSemesterController } from './academicSemester.controller'
import validateRequest from '../middlewares/validateRequest'
import { AcademicSemesterValidation } from './academicSemester.validation'
const router = express.Router()

router.post('/', validateRequest(AcademicSemesterValidation.create), AcademicSemesterController.insertIntoDB)
router.get('/', AcademicSemesterController.getAllFromDB)
router.get('/:id', AcademicSemesterController.getDataById)
router.patch('/:id', validateRequest(AcademicSemesterValidation.update ), AcademicSemesterController.updateOneIntoDB)
router.delete('/:id', AcademicSemesterController.deleteDataById)

export const academicSemesterRoutes = router