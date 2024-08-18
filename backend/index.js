const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const { connectDB } = require("./connection");
require("dotenv").config();

connectDB();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api", routes);
app.listen(port, () => console.log(`Server is running at this ${port}`));
