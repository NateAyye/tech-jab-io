const api = require('../../utils/api');

const router = require('express').Router();

router
  .route('/')
  .get(async (req, res) => {
    const comments = await api.getComments();
    if (!comments)
      return res.status(500).json({ message: 'Failed to get comments' });
    res.json(comments);
  })
  .post(async (req, res) => {
    const commentData = req.body;
    console.log(commentData);
    const comment = await api.createComment(commentData);
    if (!comment)
      return res.status(500).json({ message: 'Failed to create comment' });
    res.json({ message: 'Comment Successfully Created!', comment });
  });

module.exports = router;
