require('dotenv').config();
const express = require('express');
const connectDb = require('./config/db');
const route = require('./routers/messagesRoutes');

const app = express();

app.use(express.json());

connectDb();

app.use('/api', route)

app.listen(process.env.PORT, (error)=>{
    if(error) throw error;
    console.log('server has started successfully');
})
