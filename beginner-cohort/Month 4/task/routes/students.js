import { Router } from "express";
import {getAllStudentsData,createStudentData,getStudentData,updateStudentData,deleteStudentData} from "../controllers/students.js"
// import studentData from "../data/studentData.js";
// console.log(studentData)
const router = Router()
router.route('/').get(getAllStudentsData).post(createStudentData)
router.route('/:id').get(getStudentData).patch(updateStudentData).delete(deleteStudentData)

export default router