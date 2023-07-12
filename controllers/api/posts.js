const router = require('express').Router();
const { Post } = require('../../models');

// URL Path: /api/posts

router.route('/').get(async (req, res) => {
  const posts = await Post.findAll({});
  res.json(posts);
});

module.exports = router;
