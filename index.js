const express = require("express");
const app = express();
// const cors = require("cors");
const port = process.env.PORT || 4000;

// app.use(cors());

app.get("/", (req, res) => {
  res.send("Courses API");
});

app.listen(port, () => {
  console.log(`Learning Pro Server is running on port ${port}`);
});
