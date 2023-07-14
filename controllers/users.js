const router = require('express').Router();
const api = require('../utils/api');

router.get('/', (req, res) => {
  res.send('Hello from users');
});

router.get('/:username', async (req, res) => {
  const username = req.params.username;
  const data = await api.getUserByUsername(username);
  if (!data) return res.status(404).json({ error: 'User not found' });
  const user = data.get({ plain: true });
  const userLikes = user.posts.reduce((acc, post) => {
    return acc + post.likes;
  }, 0);
  res.render('user', { userData: user, userLikes });
});

module.exports = router;
