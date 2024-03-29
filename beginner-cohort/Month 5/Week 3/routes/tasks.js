import { Router } from "express";
import {getAllTasks,createTask,getTask,deleteTask,updateTask} from "../controllers/tasks.js"

const router = Router()

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default router
