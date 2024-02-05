const db = require("../models")
const User = db.User
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = 'your-secret-key'
const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req,res,"req,res*******8")
        // Check if the email exists
        const userExists = await db.User.findOne({
            where: {email}
        });
        if (userExists) {
            return res.status(400).send('Email is already exist');
        }


        await db.User.create({
            email,
            password: await bcrypt.hash(password, 15),
        });
        
        return res.status(200).send('Registration successful');
        
    } catch (err) {
        return res.status(500).send('Error in registering user');
    }
}

const signInUser = async (req,res) => {
    try{
        const {email, password} = req.body;
        const user = await db.User.findOne({
            where: {email}
        });
        if(!user){
            return res.status(404).json("Email is not found")
        }

        //verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.status(404).json("Incorrect email and password ")
        }

        //JWT Authentication
        const token = jwt.sign({id:user.id}, secretKey, {expiresIn:'3h'})
        res.status(200).send({
            id: user.id,
            email: user.email,
            accessToken: token,
        });
    }
    catch(err){
        return res.status(500).send('Sign in error');
    }
}
module.exports = {
    registerUser,
    signInUser
}