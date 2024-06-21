import createTaskModel from "../models/createTaskModel.js";

const createTaskController = (req, res) => {
  const { username, password, created_at } = req.body;
  createTaskModel(
    username,
    password,
    created_at,
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
    }
  );
};


export default createTaskController;