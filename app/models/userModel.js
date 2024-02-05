module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        id:{
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allownull: false,
            
        },
        email:{
            type: Sequelize.STRING,
            allownull: false,
        },
        password: {
            type: Sequelize.STRING,
            allownull: false
        }
    });
    return User;
};
