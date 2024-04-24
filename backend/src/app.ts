import express from 'express';
import multer from 'multer';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import http from 'http';
import mongoose from 'mongoose';
import U from './common/u';
import {CommitsRouter} from './routes';

const app = express();

app.use(express.static('public'));
app.use(cors({credentials: true}));
app.use(compression());
app.use(bodyParser.json({limit: '64mb'}));

/* Multer */
const upload = multer();

/* Server */
const PORT = 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log(`Server Listening on port ${PORT}.`);

/* Database */
(async function() {
    mongoose.Promise = Promise;
    let connection = false;
    while(!connection) {
        try {
            await mongoose.connect(process.env['MONGODB_URL'] || 'mongodb://localhost:27017', {dbName: 'jmh'});
            console.log('DB Connection done.');
            connection = true;
        } catch (error) {
            console.log(`DB Connection error (${process.env['MONGODB_URL'] || 'mongodb://localhost:27017'}), waiting 30 seconds...`);
            await U.sleep(30);
        }
    }
})();


/* Routes */
const root = 'jmh';
app.use(`/${root}/commits`, upload.single('file'), CommitsRouter);

