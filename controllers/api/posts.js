const router = require('express').Router();
const { Post } = require('../../models');
const api = require('../../utils/api');

// URL Path: /api/posts

router
  .route('/')
  .get(async (req, res) => {
    const { order, orderBy } = req?.query;
    const posts = await api.getPosts(order, orderBy);
    res.json(posts);
  })
  .post(async (req, res) => {
    const post = await api.createPost(req.body);
    if (!post)
      return res.status(500).json({ message: 'Failed to create post' });
    res.json({ message: 'Post created successfully', post });
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const post = await api.getPost(req.params.id);
    if (!post) return res.status(500).json({ message: 'Failed to get post' });
    res.json({ message: 'Post retrieved successfully', post });
  })
  .put(async (req, res) => {
    const post = await api.updatePost(req.params.id, req.body);
    if (!post)
      return res.status(500).json({ message: 'Failed to update post' });
    res.json({ message: 'Post updated successfully', post });
  })
  .delete(async (req, res) => {
    const post = await api.deletePost(req.params.id);
    if (!post)
      return res.status(500).json({ message: 'Failed to delete post' });
    res.json({ message: 'Post deleted successfully', post });
  });

module.exports = router;
