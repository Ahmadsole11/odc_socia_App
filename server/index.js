import express from 'express';
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
import dotenv from 'dotenv';
import cors from 'cors'

import authRouters from './routes/auth.js'
import postsRouters from './routes/postRoute.js'


dotenv.config();
const DB_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

const app = express();


app.use(cors());
app.use(express.json());

app.use("/auth", authRouters);
app.use("/posts", postsRouters);

app.get('/', (req, res)=>{
    res.status(200).send("Hello")
})

mongoose.connect(DB_URL).then(()=>{
    console.log('conntecte to MONGODB');
})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running on http://localhost:${PORT}`)
    });
})
.catch((err)=>{
    console.log(err);
})
