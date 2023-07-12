const { User, Post, Comment } = require('../models');

class ApiHelpers {
  constructor() {}

  async getUsers(excludePassword = true) {
    try {
      const users = await User.findAll({
        attributes: { exclude: excludePassword ? ['password'] : null },
        include: [{ model: Post }, { model: Comment }],
      });
      return users;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getUser(id, excludePassword = true) {
    try {
      const user = await User.findOne({
        where: { id },
        attributes: { exclude: excludePassword ? ['password'] : null },
        include: [{ model: Post }, { model: Comment }],
      });
      return user;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getUserByEmail(email, excludePassword = true) {
    try {
      const user = await User.findOne({
        where: { email },
        attributes: { exclude: excludePassword ? ['password'] : null },
        include: [{ model: Post }, { model: Comment }],
      });
      return user;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async createUser(user) {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updateUser(id, user) {
    try {
      const updatedUser = await User.update(user, { where: { id } });
      return updatedUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteUser(id) {
    try {
      const deletedUser = await User.destroy({ where: { id } });
      return deletedUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPosts(excludePassword = true) {
    try {
      const posts = await Post.findAll({
        include: [
          {
            model: User,
            attributes: { exclude: excludePassword ? ['password'] : null },
          },
          { model: Comment },
        ],
      });
      return posts;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost(id, excludePassword = true) {
    try {
      const post = await Post.findOne({
        where: { id },
        include: [
          {
            model: User,
            attributes: { exclude: excludePassword ? ['password'] : null },
          },
          { model: Comment },
        ],
      });
      return post;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async createPost(post) {
    try {
      const newPost = await Post.create(post);
      return newPost;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updatePost(id, post) {
    try {
      const updatedPost = await Post.update(post, { where: { id } });
      return updatedPost;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deletePost(id) {
    try {
      const deletedPost = await Post.destroy({ where: { id } });
      return deletedPost;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getComments(excludePassword = true) {
    try {
      const comments = await Comment.findAll({
        include: [
          {
            model: User,
            attributes: { exclude: excludePassword ? ['password'] : null },
          },
          { model: Post },
        ],
      });
      return comments;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getComment(id, excludePassword = true) {
    try {
      const comment = await Comment.findOne({
        where: { id },
        include: [
          {
            model: User,
            attributes: { exclude: excludePassword ? ['password'] : null },
          },
          { model: Post },
        ],
      });
      return comment;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async createComment(comment) {
    try {
      const newComment = await Comment.create(comment);
      return newComment;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async updateComment(id, comment) {
    try {
      const updatedComment = await Comment.update(comment, { where: { id } });
      return updatedComment;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteComment(id) {
    try {
      const deletedComment = await Comment.destroy({ where: { id } });
      return deletedComment;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

module.exports = new ApiHelpers();
