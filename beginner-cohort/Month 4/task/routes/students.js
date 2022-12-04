import { Router } from "express";
import {getAllStudents,createStudent,getStudent} from "../controllers/students.js"
// import studentData from "../data/studentData.js";
// console.log(studentData)
const router = Router()
router.route('/').get(getAllStudents).post(createStudent)
router.route('/:id').get(getStudent)

export default router