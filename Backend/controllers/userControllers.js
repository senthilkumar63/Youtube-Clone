const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, conformpassword } = req.body;

  const userExists = await User.findone({ email });

  if (userExists) {
    res.send(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({ name, email, password, conformpassword });

  if (user) {
    res.send(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      comformpassword: user.comformpassword,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }

  // res.json({
  //     name,
  //     email,
  // })
});

module.exports = {
  registerUser,
};
