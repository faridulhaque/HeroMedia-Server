const express = require('express');
const {blogPost, getAllBlogs} = require('../controllers/blogPost.controller');
const router = express.Router();

router.post("/new", blogPost)
router.get("/all", getAllBlogs)


module.exports=router;