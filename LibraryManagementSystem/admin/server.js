// backend gateway
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// importing routers as require
const bookRoutes = require("./routes/bookroute");

// importing user routes
const userRoutes = require("./routes/userRoute");
const historyRoute = require("./routes/historyRoute");

const app = express();

const port = process.env.PORT || 4400;

//middleware
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// this is the endpoint
app.use("/api/books", bookRoutes);
app.use("/api/user", userRoutes);
app.use("/api/history", historyRoute);

// connect to mongoDB
mongoose
  .connect(
    `mongodb+srv://hemanathan2k01:9hXwL3PygDZGt28L@cluster0.izqffdg.mongodb.net/`
  )
  .then(() => {
    console.log(`DB Connented`);
    app.listen(port, () => {
      console.log(`Port ${port} is active.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
