const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = 8000;

const blogsRoutes = require("./routes/blogs");
const categoriesRoutes = require ("./routes/categories");

const app = express();

// Enabling CORS for any unknown origin
app.use(cors());

// Enabling the use of JSON for the body of the request
app.use(express.json());

app.use("/api/blogs", blogsRoutes);
app.use("/api/categories", categoriesRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Blog API");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});