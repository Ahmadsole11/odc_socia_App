import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { lastName, firstName, email, password } = req.body;
  // if User exist
  const user_exists = await User.findOne({ email });
  if (user_exists) {
    return res.status(400).json({ message: "User already exist" });
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const user = new User({
    lastName,
    firstName,
    email,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.status(201).json({ user: user.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login user

export const login = async (req, res) => {
  const { email, password } = req.body;
  // hash password and compare
//   const passwordHash = await bcrypt.hash(password, 10);
  // find user in db
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ message: "User invalid" });
  } else {
    //check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credantials" });
    } else {
    // sign jwt
    const token = jwt.sign( {id: user._id}, process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );
    user.token = token;
      res.status(200).json({ message: "Logged successful", user, token });
    }
  }
};
