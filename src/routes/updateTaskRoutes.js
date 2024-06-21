import express from 'express'
import updateTaskController from '../controllers/updateTask.js'

const router = express.Router()

router.put('/tasks/:id',updateTaskController)

export default router;