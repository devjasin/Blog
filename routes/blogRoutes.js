const { createBlog } = require("../controller/blogcontroller");

const router = require("express").Router();
router.route("create").get(createBlog);

module.exports = router;
