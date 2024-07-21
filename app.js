const express = require("express");
const errorHandler = require("./Middleware/errorHandling");
const dbConnect = require("./Config/dbConnect");

const dotenv = require("dotenv").config();

dbConnect();
const app = express();
app.use(express.json());
app.use("/student",require("./Routes/student.route"));

app.use(errorHandler);
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})