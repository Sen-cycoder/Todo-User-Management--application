import express from 'express'
import createTaskController from '../controllers/createTask.js'

const router = express.Router()

router.post('/tasks',createTaskController)

export default router;