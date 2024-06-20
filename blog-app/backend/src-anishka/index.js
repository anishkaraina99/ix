const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
require("dotenv").config();
const port = process.env.PORT || 8000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", require("./routes/blogs"));
app.use("/api/categories", require("./routes/categories"));

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});