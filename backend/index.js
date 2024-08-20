import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes.js';
import { connectDB } from './connection.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173', credentials: true
    }
));
app.use(cookieParser());
app.use("/api", routes);

app.listen(port, () => console.log(`Server is running at port ${port}`));
