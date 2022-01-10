import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import dotenv from 'dotenv';

import vocabsRouter from './routers/vocabs.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;



app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use(methodOverride('_method'));

app.use('/', vocabsRouter);


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('database is connected!!');
        app.listen(PORT, () => {
            console.log('Sever is running on port ' + PORT);
        })

    })
    .catch((err) => {
        console.log('err: ' + err);
    })

