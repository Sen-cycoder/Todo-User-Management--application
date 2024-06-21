import getAllTasksModel from "../models/getAllTaskModel.js";

const getAllTasksController = (req,res) =>{
    getAllTasksModel((err,results)=>{
        if (err){
            console.error("Error fetching details:",err)
            return res.status(500).json({Error:"Failed to fetch Tasks"})
        }
        res.json(results)
    })
}

export default getAllTasksController;