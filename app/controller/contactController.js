const db = require("../models")
const Contact = db.Contact;

const userContact = async(req,res) => {
    try{
        const { name, email, message } = req.body;
        await db.Contact.create({
            name,
            email,
            message
        }) 
        return res.status(200).send("Send Message Successfully.")  
    }catch(err){
        return res.status(500).send('Error in sending message',err.message);
    }
}
const getUserContact = async(req,res) => {
    try{
        await db.Contact.findAll({
            attribute:["name", "email","message"],
            limit: 10
        })
        .then((message)=>{
            res.status(200).send(message)
        })
        .catch((err)=>{
            res.status(500).send(err.message)
        })
    }
    catch(err){
        console.log("Error occur during display message.")
    }
}
module.exports = {
    userContact,
    getUserContact
}