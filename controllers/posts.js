const router = require('express').Router();
const api = require('../utils/api');

router.get('/', (req, res) => {});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const postData = await api.getPost(id);
  if (!postData) return res.status(500).json({ message: 'Failed to get post' });
  const post = postData.get({ plain: true });
  const isAuthor = post?.user_id === req?.session?.user?.id;
  res.render('post', { post, isAuthor });
});

module.exports = router;
