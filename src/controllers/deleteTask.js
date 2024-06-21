import deleteTaskModel from "../models/deleteTaskModel.js";

const deleteTasKController = (req,res) =>{
    const id = req.params.id

    deleteTaskModel(id,(err,results)=>{
        if(err){
            return res.status(500).json({error:err.message})
        }
        if(results.affectedRows==0){
            return res.status(400).json({error:"Task not found"})
        }
        res.status(200).json({message:"Task deleted successfully"})
    })
}

export default deleteTasKController;