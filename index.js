const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(cors());

const categoreis = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Courses API");
});

app.get("/course-category", (req, res) => {
  res.send(categoreis);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "01") {
    res.send(courses);
  } else {
    const specificCategoryCourses = courses.filter((n) => n.category_id == id);
    res.send(specificCategoryCourses);
  }
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((n) => n._id == id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Learning Pro Server is running on port ${port}`);
});
