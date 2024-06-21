import { pool } from '../config/databaseConnection.js';

const getAllTasksModel = (callback) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

export default getAllTasksModel;
