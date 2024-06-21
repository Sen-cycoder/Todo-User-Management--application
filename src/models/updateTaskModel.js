import { pool } from "../config/databaseConnection.js";

const updateTaskModel = (id, username, password, created_at, callback) => {
  const sql = `UPDATE users SET username=?, password=?, created_at=? WHERE id=?`;
  const values = [username, password, created_at, id];

  pool.query(sql, values, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    if (results.affectedRows === 0) {
      return callback(new Error("User not found"), null);
    }
    callback(null, {
      id,
      username,
      password,
      created_at,
    });
  });
};

export default updateTaskModel;

