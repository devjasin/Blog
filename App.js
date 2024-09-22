const express = require("express");
const { createBlog } = require("./controller/blogcontroller");
const app = express();
const blogRoute = require("./routes/blogRoutes");
require("./model/index");
app.set("view engine", "ejs");
app.listen(3000, () => {
  console.log("server is running at 3000 portnumber");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/blog", (req, res) => {
  res.render("blog.ejs", {
    title: "Blog",
    date: new Date().toLocaleDateString(),
  });
});
//app jati pani use bhayeko xa tyo sabai express use bhayeko ho
app.get("/blog/create", (req, res) => {
  res.render("createblog.ejs");
});
//blog/edit it self called api
app.get("/blog/edit", (req, res) => {
  res.render("editblog.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

//incase if we use react for front end than our code will be

app.get("/api", createBlog);
app.use("/guju/", createBlog);
