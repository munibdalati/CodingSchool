const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// ----------------- login -----------------
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);

    res
      .status(200)
      .json({
        status: "success",
        username: user.username,
        email,
        role: user.role,
        token,
      });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};
// ----------------- get all users -----------------

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({
        status: "success",
        results: users.length,
        data: {
          users,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error,
      });
    }
  };
