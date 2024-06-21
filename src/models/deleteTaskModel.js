import { pool } from "../config/databaseConnection.js";

const deleteTaskModel = (id, callback) => {
  pool.query("delete from users where id=?", [id], (err, results) => {
    if (err) {
      return callback(sql,[id],err, null);
    }
    callback(null, results);
  });
};

export default deleteTaskModel;