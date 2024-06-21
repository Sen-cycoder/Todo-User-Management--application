import express from 'express'
import getByIdController from '../controllers/getById.js'

const router = express.Router()

router.get('/tasks/:id',getByIdController)

export default router;