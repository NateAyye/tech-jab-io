const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('^/$|/index(.html)?', async (req, res) => {
  const page = req.query.page || 1;
  const postsData = await Post.findAll({
    include: [
      { model: User, attributes: { exclude: ['password'] } },
      {
        model: Comment,
        include: { model: User, attributes: { exclude: ['password'] } },
      },
    ],
    limit: 16,
    order: [['createdAt', 'DESC']],
    offset: (page - 1) * 16,
  });
  const postsCount = await Post.count();

  const pages = Math.ceil(postsCount / 16);

  const pagination = [];

  for (let i = 0; i < pages; i++) {
    if (i === pages - 1) {
      pagination.push({ page: '...', active: false, disabled: true });
    }
    pagination.push({ page: i + 1, active: i + 1 === parseInt(page) });
  }


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
