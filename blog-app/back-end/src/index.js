const express = require("express");
const cors = require("cors");
require("dotenv").config();

const blogsRoutes = require("./routes/blogs");
const categoryRoutes = require("./routes/categories");
const authRoutes = require("./routes/auth");
const path = require("path");

const connectDB = require("./database/db");

connectDB();

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/blogs", blogsRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

app.post('/api/blogs', (req, res) => {
  console.log(req.body); // This should print the blog object
  // Your logic here...
});

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});