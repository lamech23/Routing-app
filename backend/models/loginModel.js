import sequelize from "sequelize"
import db from "../config/database.js"

const {DataTypes} = sequelize;
const logings =db.define('login',{
  
    userEmail:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default logings

