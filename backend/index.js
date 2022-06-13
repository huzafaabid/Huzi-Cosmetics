import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import CartProductRoutes from './Routes/CartProduct.js';

const app = express();

const url = "mongodb+srv://huzafa:123@cluster0.whofw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true })
    .then(()=>console.log("connected to the database"));

app.listen(5000);
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-to-cart', CartProductRoutes);