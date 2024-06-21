import getByIdModel from "../models/getByIdModel.js";

const getByIdController = (req,res) =>{
    const id = req.params.id;

    getByIdModel(id,(err,results)=>{
        if(err) {
            console.error("Error fetching tasks",err)
            return res.status(500).json({error:'Failed to fetch tasks'})
        }
        if(results.length==0){
            return res.status(404).json({error:"Task not found"})
        }
        res.json(results[0])
    })

}

export default getByIdController;