import sequelize from "sequelize"
import db from "../config/database.js"

const {DataTypes} = sequelize;
const user =db.define('users',{
    userName:{
        type:DataTypes.STRING
    },
    userEmail:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default user

