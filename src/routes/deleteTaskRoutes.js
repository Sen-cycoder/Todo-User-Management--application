import express from 'express'
import deleteTasKController from '../controllers/deleteTask.js'

const router = express.Router()

router.delete('/tasks/:id',deleteTasKController)

export default router;