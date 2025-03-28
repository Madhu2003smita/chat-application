require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const route = require('./routers/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use('/api', route)

app.listen(process.env.PORT, (error)=>{
    if(error) throw error;
    console.log('server has started successfully');
})
