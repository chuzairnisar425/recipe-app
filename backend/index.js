const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, () => console.log(`Server is running at this ${port}`));
