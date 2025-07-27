const express = require('express');
const { protect } = require('../middlewares/auth');
const { createPost, getPosts } = require('../controllers/social');

const router = express.Router();

router.route('/')
  .get(getPosts)
  .post(protect, createPost);

module.exports = router;