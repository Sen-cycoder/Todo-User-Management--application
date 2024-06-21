import { pool } from "../config/databaseConnection.js";

const getByIdModel = (id,callback)=>{
    pool.query("select * from users where id=?",[id],(err,results)=>{
        if (err){
            return callback(err,null)
        }
        callback(null,results)
    });
};

export default getByIdModel;