const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = 'your-secret-key';
const refreshTokenSecret = 'your-refresh-token-secret';
const accessTokenExpireTime = '3h'; // Expiration time for access tokens
const refreshTokenExpireTime = '7d'; // Expiration time for refresh tokens

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id }, secretKey, { expiresIn: accessTokenExpireTime });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, refreshTokenSecret, { expiresIn: refreshTokenExpireTime });
};

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if the email exists
    const userExists = await db.User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).send('Email already exists');
    }

    // Create user with hashed password
    const hashedPassword = await bcrypt.hash(password, 15);
    await db.User.create({ email, password: hashedPassword });

    return res.status(200).send('Registration successful');
  } catch (err) {
    return res.status(500).send('Error in registering user');
  }
};

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json("Email not found");
    }

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(404).json("Incorrect email or password");
    }

    // Generate access token and refresh token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.status(200).send({
      id: user.id,
      email: user.email,
      accessToken,
      refreshToken
    });
  } catch (err) {
    return res.status(500).send('Sign in error');
  }
};

module.exports = {
  registerUser,
  signInUser
};
