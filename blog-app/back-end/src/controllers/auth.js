const User = require("../models/UserModel");

const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, bio, password } = req.body;
    //check payload
    if (!firstName || !lastName || !email || !bio || !password) {
      res.status(400).json({ message: "All fields are required", data: [] });
      return;
    }
    // check if email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "User already exists", data: [] });
      return;
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new user
    const user = new User({
      firstName,
      lastName,
      email,
      bio,
      password,
    });
    const newUser = await user.save();
    newUser.password = undefined;
    newUser.token = generateToken(newUser._id);
    res.status(201).json({ message: "New user created!", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message, data: [] });
  }
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      // check payload
      if (!email || !password) {
        res.status(400).json({ message: "All fields are required", data: [] });
        return;
      }
      // check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ message: "User does not exist", data: [] });
        return;
      }
      // check if password is correct
      // check hashed password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        res.status(400).json({ message: "Invalid credentials", data: [] });
        return;
      }
      user.password = undefined;
      user.token = generateToken(newUser._id);  
      res.status(200).json({ message: "Login successful!", data: user });
    } catch (error) {
      res.status(500).json({ message: error.message, data: [] });
    }
  };

  module.exports = {
    register,
    login,
  };