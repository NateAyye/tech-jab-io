const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('^/$|/index(.html)?', async (req, res) => {
  const postsData = await Post.findAll({
    include: [
      { model: User, attributes: { exclude: ['password'] } },
      {
        model: Comment,
        include: { model: User, attributes: { exclude: ['password'] } },
      },
    ],
  });
  const posts = postsData.map((post) => post.get({ plain: true }));
  res.render('home', { posts });
});

router.get('*', (req, res) => {
  res.render('404', { layout: 'solo' });
});

module.exports = router;
