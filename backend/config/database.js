import sequelize from "sequelize";


const db = new sequelize('logings', 'root', '',{
    host:"localhost",
    dialect: "mysql"
});

export default db;
