import express from 'express'
const router = express.Router()

import getAllTasksController from '../controllers/getAllTask.js'

router.get('/tasks',getAllTasksController)

export default router;