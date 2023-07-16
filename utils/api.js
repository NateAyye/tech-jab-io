const { User, Post, Comment } = require('../models');

class ApiHelpers {
  constructor() {}

  /***
   * @description Get all users
   * @param {string} ord - Order of results (ASC or DESC)
   * @param {string} ordBy - Order by column (createdAt, updatedAt, etc.)
   * @param {boolean} excludePassword - Exclude password from results (default: true)
   * @returns {array} - Array of users
   * @memberof ApiHelpers
   * @function getUsers
   * @example
   * const users = await api.getUsers('ASC', 'createdAt');
   * console.log(users);
   * // [
   * //   {
   * //     id: 1,
   * //     username: 'testuser1',
   * //     email: 'testuser1@test',
   * //     createdAt: 2021-08-03T20:00:00.000Z,
   * //     updatedAt: 2021-08-03T20:00:00.000Z,
   * //     posts: [
   * //       ...
   * //     ],
   * //     comments: [
   * //       ...
   * //     ]
   * //   },
   * //   ...
   * // ]
   * */
  async getUsers(ord, ordBy, excludePassword = true) {
    const order = ord === 'ASC' ? 'ASC' : 'DESC';
    const orderBy = ordBy || 'createdAt';
    try {
      const users = await User.scope(
        excludePassword ? 'withoutPassword' : 'withPassword',
      ).findAll({
        include: [{ model: Post }, { model: Comment }],
        order: [[orderBy, order]],
      });
      return users;
    } catch (error) {
      return false;
    }
  }

  /***
   * @description Get a user by id
   * @param {number} id - User id
   * @param {boolean} excludePassword - Exclude password from results (default: true)
   * @returns {object} - User object
   * @memberof ApiHelpers
   * @example
   * const user = await api.getUser(1);
   * console.log(user);
   * // {
   * //   id: 1,
   * //   username: 'testuser1',
   * //   avatar: 'https://via.placeholder.com/150',
   * //   about: 'This is a test user',
   * //   first_name: 'John',
   * //   last_name: 'Fanklin',
   * //   email: 'testuser1@test',
   * //   createdAt: 2021-08-03T20:00:00.000Z,
   * //   updatedAt: 2021-08-03T20:00:00.000Z,
   * //   posts: [
   * //     ...
   * //   ],
   * //   comments: [
   * //     ...
   * //   ]
   * // }
   */
  async getUser(id, excludePassword = true) {
    try {
      const user = await User.scope(
        excludePassword ? 'withoutPassword' : 'withPassword',
      ).findOne({
        where: { id },
        include: [
          { model: Post, include: [{ model: User }, { model: Comment }] },
          { model: Comment, include: [{ model: User }] },
        ],
      });
      return user;
    } catch (error) {
      return false;
    }
  }

  async getUserByUsername(username, excludePassword = true) {
    try {
      const user = await User.scope(
        excludePassword ? 'withoutPassword' : 'withPassword',
      ).findOne({
        where: { username },
        include: [
          { model: Post, include: [{ model: Comment }, { model: User }] },
          { model: Comment },
        ],
      });
      return user;
    } catch (error) {
      return false;
    }
  }

  async getUserByEmail(email, excludePassword = true) {
    try {
      const user = await User.scope(
        excludePassword ? 'withoutPassword' : 'withPassword',
      ).findOne({
        where: { email },
        include: [{ model: Post }, { model: Comment }],
      });
      return user;
    } catch (error) {
      return false;
    }
  }

  async createUser(user) {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      return false;
    }
  }

  async updateUser(id, user) {
    try {
      await User.update(user, { where: { id } });
      const foundUser = await User.findOne({ where: { id } });
      return foundUser;
    } catch (error) {
      return false;
    }
  }

  async deleteUser(id) {
    try {
      const deletedUser = await User.destroy({ where: { id } });
      return deletedUser;
    } catch (error) {
      return false;
    }
  }

  async getPosts(ord, ordBy, excludePassword = true) {
    const order = ord === 'ASC' ? 'ASC' : 'DESC';
    const orderBy = ordBy || 'createdAt';
    try {
      const posts = await Post.findAll({
        order: [[orderBy, order]],
        include: [
          { model: User },
          { model: Comment, include: [{ model: User }] },
        ],
      });
      return posts;
    } catch (error) {
      return false;
    }
  }

  async getPostsByUserId(userId, ord, ordBy) {
    const order = ord === 'ASC' ? 'ASC' : 'DESC';
    const orderBy = ordBy || 'createdAt';
    try {
      const posts = await Post.findAll({
        where: { user_id: userId },
        order: [[orderBy, order]],
        include: [
          { model: User },
          { model: Comment, include: [{ model: User }] },
        ],
      });
      return posts;
    } catch (error) {
      return false;
    }
  }

  async getPost(id) {
    try {
      const post = await Post.findOne({
        where: { id },
        include: [
          { model: User },
          {
            model: Comment,
            order: [['createdAt', 'DESC']],
            separate: true,
            include: [{ model: User }],
          },
        ],
      });
      return post;
    } catch (error) {
      return false;
    }
  }

  async createPost(post) {
    try {
      const newPost = await Post.create(post);
      return newPost;
    } catch (error) {
      return false;
    }
  }

  async updatePost(id, post) {
    try {
      const updatedPost = await Post.update(post, { where: { id } });
      return updatedPost;
    } catch (error) {
      return false;
    }
  }

  async deletePost(id) {
    try {
      const deletedPost = await Post.destroy({ where: { id } });
      return deletedPost;
    } catch (error) {
      return false;
    }
  }

  async getComments() {
    try {
      const comments = await Comment.findAll({
        include: [{ model: User }, { model: Post, include: [{ model: User }] }],
      });
      return comments;
    } catch (error) {
      return false;
    }
  }

  async getComment(id) {
    try {
      const comment = await Comment.findOne({
        where: { id },
        include: [{ model: User }, { model: Post, include: [{ model: User }] }],
      });
      return comment;
    } catch (error) {
      return false;
    }
  }

  async createComment(comment) {
    try {
      const newComment = await Comment.create(comment);
      return newComment;
    } catch (error) {
      return false;
    }
  }

  async updateComment(id, comment) {
    try {
      const updatedComment = await Comment.update(comment, { where: { id } });
      return updatedComment;
    } catch (error) {
      return false;
    }
  }

  async deleteComment(id) {
    try {
      const deletedComment = await Comment.destroy({ where: { id } });
      return deletedComment;
    } catch (error) {
      return false;
    }
  }

  getPagination(pages, currentPage) {
    const pagination = [];

    for (let i = 0; i < pages; i++) {
      pagination.push({ page: i + 1, active: i + 1 === parseInt(currentPage) });
      if (i === pages)
        pagination.push({ page: '...', active: false, disabled: true });
    }
    return pagination;
  }
}

module.exports = new ApiHelpers();
