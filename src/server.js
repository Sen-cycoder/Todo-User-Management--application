import express from 'express'
import getAllTasksRouter from './routes/getAllTaskRouter.js'
import getByIdRouter from './routes/getByIdRouter.js'
import createTaskRouter from './routes/createTaskRoutes.js'
import deleteTaskRouter from './routes/deleteTaskRoutes.js'
import updateTaskRouter from './routes/updateTaskRoutes.js'

const app = express();

//port address
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//Default path of the API
app.get('/',(req,res)=>{
    res.send("Welcome to Todo User Management System")
})

//using routers
app.use('/',getAllTasksRouter,getByIdRouter,createTaskRouter,deleteTaskRouter,updateTaskRouter)

app.listen(PORT,()=>{
    console.log(`server listening at http://localhost:${PORT}`)
})