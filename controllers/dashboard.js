const router = require('express').Router();
const { redirectOnLoggedOut } = require('../middleware/auth');
const { Post } = require('../models');
const api = require('../utils/api');
router.use(redirectOnLoggedOut('/login'));

router.use(async (req, res, next) => {
  const user = (await api.getUser(req.session.user.id)) || [];
  const userPosts = user.get({ plain: true }).posts;

  const userLikes = user.posts
    ?.map((post) => post?.dataValues?.likes)
    ?.reduce((a, b) => a + b, 0);
  res.locals.userLikes = userLikes;
  res.locals.userPosts = userPosts;
  next();
});

router.get('/new-post', (req, res) => {
  res.render('dashboard/new-post', { layout: 'dashboard' });
});

router.get('/', (req, res) => {
  res.render('dashboard', { layout: 'dashboard' });
});

module.exports = router;
