// const express = require('express')
// require('dotenv').config()
// const app = express()
// const port = process.env.PORT
// const cors = require('cors')


// app.use(cors())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const users = [
//   {
//     "id": 001,
//     "Name": "Lamech Mongare"
//   },
//   {
//     "id": 002,
//     "Name": "Teresa Kerubo"
//   }
// ]

// app.get('/users', (req, res) => {
//   res.send(users)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express from "express";
import db from "./config/database.js";
import usersRoutes from "./routes/app.js";
import logingRoutes from "./routes/appLogIn.js"

import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/users', usersRoutes);
app.use('/login', logingRoutes);
 
app.listen(8000, () => console.log('Server running at port 8000'));
