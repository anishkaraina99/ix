const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database/db");


connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use("/api/blogs", require("./routes/blogs"));
app.use("/api/categories", require("./routes/blogs"));

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});