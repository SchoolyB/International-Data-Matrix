const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// we use || to provide a default value
const PORT = process.env.PORT || 4040;

//initializes ExpressJs application
const app = express();

mongoose.connect(process.env.DATA_BASE);
const db = mongoose.connection;

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} `);
  next();
};

app.use(express.json());
app.use(logging);

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to database.")
);
app.get("/status", (request, response) => {
  response.status(200).json({ message: "sService healthy" });
});

// tells ExpressJs app to listen to a port and log what port its listening on
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
