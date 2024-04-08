import {Router} from 'express'
import { getAllTasks, createTask, updateTask, deleteTask } from '../controllers/task.controller.js'

const route = Router()

route.get("/:challenge", getAllTasks)

route.post("/createTask", createTask)

route.put("/:id", updateTask)

route.delete("/:id", deleteTask)

export default route