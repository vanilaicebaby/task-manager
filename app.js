const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const config = require("dotenv").config();
//middleware
app.use(express.static('./public/'));
app.use(express.json());

// routs
//app.get("/hello", (req, res) => {
//  res.send("Task Manager App");
//});

const port = 3000;

// connect to database

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is running"));
  } catch (error) {
    console.log(error);
  }
};

start();

app.use("/api/v1/tasks", tasks);
