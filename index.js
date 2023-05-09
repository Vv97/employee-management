const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./database/database.db");
const userRouter = require("./routes/user.routes");
const dashboardRouter = require("./routes/dashboard.routes");
require("dotenv").config();


app.use(express.json());
app.use(cors());

//  default route
app.get("/", (req, res) => {
    res.status(200).send({ message: "welcome" })
});


// user route
app.use("/user", userRouter);

// employees route
app.use("/employees", dashboardRouter);


app.listen(process.env.port, () => {
    connectDb();
    console.log(`server is running at ${process.env.port}`)
});