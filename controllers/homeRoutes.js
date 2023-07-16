const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const api = require('../utils/api');

router.get('/login', (req, res) => {
  if (req?.session?.loggedIn) return res.redirect('/');
  res.render('login', { layout: 'solo' });
});

router.get('/sign-up', (req, res) => {
  if (req?.session?.loggedIn) return res.redirect('/');
  res.render('sign-up', { layout: 'solo' });
});

router.get('^/$|/index(.html)?', async (req, res) => {
  const page = req.query.page || 1;
  const postsCount = await Post.count();
  const PAGE_SIZE = 16;
  const pages = Math.ceil(postsCount / PAGE_SIZE);
  const pagination = api.getPagination(pages, page);

  const postsData = await Post.findAll({
    include: [
      { model: User },
      {
        model: Comment,
        include: { model: User },
      },
    ],
    limit: PAGE_SIZE,
    order: [['createdAt', 'DESC']],
    offset: (page - 1) * PAGE_SIZE,
  });

  const posts = postsData.map((post) => post.get({ plain: true }));

  res.render('home', {
    posts,
    page,
    pagination,
    lastPage: pages === parseInt(page),
    firstPage: parseInt(page) === 1,
  });
});

router.get('*', (req, res) => {
  res.render('404', { layout: 'solo' });
});

module.exports = router;
