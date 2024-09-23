const express = require("express");
const { createBlog } = require("./controller/blogcontroller");
const app = express();
const blogRoute = require("./routes/blogRoutes");
const { blogs } = require("./model/index");
require("./model/index");
app.set("view engine", "ejs");

const { multer, storage } = require("./middleware/multerConfig");
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
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
//main function which insert data into database
//middleware is always between router and main function
//incase of array we shoud use upload.array
app.post("/blog", upload.single("image"), async (req, res) => {
  const { title, subtitle, description } = req.body;
  console.log(req.files);
  console.log(req.res);
  await blogs.create({
    title: title,
    subTitle: subtitle,
    description: description,
    imageUrl: req.file.filename,
  });
  res.redirect("/");
});

//incase if we use react for front end than our code will be

app.get("/api", createBlog);
app.use("/guju/", createBlog);
