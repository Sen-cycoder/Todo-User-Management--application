import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Rhythmsen@1234",
  database: "todo_list",

  authPlugins: {
    mysql_clear_password: () => () => Buffer.from("9862Raja@1", "utf8"),
  },
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Successfully connected to the database");
    connection.release();
  }
});

export { pool };
