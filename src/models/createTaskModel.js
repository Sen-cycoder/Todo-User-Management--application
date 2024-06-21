

import { pool } from "../config/databaseConnection.js";

const createTaskModel = (username, password, created_at, callback) => {
  const sql = `INSERT INTO users(username, password, created_at) VALUES (?, ?, ?)`;
  const values = [username, password, created_at];

  pool.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing SQL", err);
      return callback(err, null);
    }
    callback(null, {
      username,
      password,
      created_at,
    });
  });
};

export default createTaskModel;
