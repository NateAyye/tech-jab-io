const router = require('express').Router();
const { redirectOnLoggedOut } = require('../middleware/auth');
const { Post } = require('../models');
const api = require('../utils/api');
router.use(redirectOnLoggedOut('/login'));

router.use(async (req, res, next) => {
  const user = (await api.getUser(req.session.user.id)) || [];
  const userPosts = user.get({ plain: true }).posts;

  const userLikes = userPosts
    ?.map((post) => post?.likes)
    ?.reduce((a, b) => a + b, 0);
  
  res.locals.userLikes = userLikes;
  res.locals.userPosts = userPosts;
  next();
});

router.get('/new-post', (req, res) => {
  res.render('dashboard/new-post', { layout: 'dashboard' });
});

router.get('/edit-post/:id', async (req, res) => {
  const id = req.params.id;
  const postData = await api.getPost(id);
  if (!postData) return res.status(500).json({ message: 'Failed to get post' });
  const post = postData.get({ plain: true });
  res.render('dashboard/edit-post', { post, layout: 'dashboard' });
});

router.get('/', async (req, res) => {
  const userData = (await api.getUser(req.session.user.id)) || {};
  const user = userData?.get({ plain: true });
  const posts = user?.posts || [];
  res.render('dashboard', { posts, isAuthor: true, layout: 'dashboard' });
});

module.exports = router;
