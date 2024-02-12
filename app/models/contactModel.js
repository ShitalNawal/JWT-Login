module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("Contact", {
        id:{
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allownull: false,
            
        },
        name:{
            type: Sequelize.STRING,
            allownull: false,
        },
        email:{
            type: Sequelize.STRING,
            allownull: false,
        },
        message: {
            type: Sequelize.STRING,
            allownull: false
        }
    });
    return Contact;
};