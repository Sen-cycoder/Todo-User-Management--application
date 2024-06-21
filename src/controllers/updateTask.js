import updateTaskModel from "../models/updateTaskModel.js";

const updateTaskController = (req, res) => {
  const id = req.params.id;
  const { username, password, created_at } = req.body;

  updateTaskModel(
    id,
    username,
    password,
    created_at,
    (err, updatedUser) => {
      if (err) {
        if (err.message === "User not found") {
          return res.status(404).json({ error: err.message });
        }
        return res.status(500).json({ error: err.message });
      }
      return res.json({
        message: "User updated successfully",
        user: updatedUser,
      });
    }
  );
};

export default updateTaskController