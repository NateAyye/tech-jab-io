const router = require('express').Router();
const { User } = require('../../models');
const api = require('../../utils/api');

router.use('/signup', async (req, res) => {
  const foundUser = await api.getUserByEmail(req.body.email);

  if (foundUser)
    return res.status(409).json({ message: 'Email Already Exists!' });

  const user = await api.createUser(req.body);

  if (!user) return res.status(500).json({ message: 'Failed to create user' });

  res.status(201).json({ message: 'User Signedup successfully', user });
});

router.use('/login', async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await api.getUserByEmail(email);

  if (!foundUser)
    return res.status(409).json({ message: 'No User with that Email' });

  const validPassword = foundUser.checkPassword(password);

  if (!validPassword)
    return res.status(409).json({ message: 'Incorrect Password' });

  // TODO: Save the session so the user can be logged in
  res.json({ message: `Logged in with email: ${email}`, user: foundUser });
});

router.use('/logout', (req, res) => {
  if (res.session.loggedIn) {
    res.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router
  .route('/')
  .get(async (req, res) => {
    const users = await api.getUsers();

    if (!users) res.status(500).json({ message: 'Failed to get users' });

    res.json({ message: 'Users retrieved successfully', users });
  })
  .post(async (req, res) => {
    const foundUser = await api.getUserByEmail(req.body.email);

    if (foundUser)
      return res.status(409).json({ message: 'Email Already Exists!' });

    const user = await api.createUser(req.body);

    if (!user)
      return res.status(500).json({ message: 'Failed to create user' });

    res.json({ message: 'User created successfully', user });
  });

router.route('/:id').get(async (req, res) => {
  const user = await api.getUser(req.params.id);

  if (!user) res.status(409).json({ message: 'No User with that ID' });

  res.json({ message: 'User retrieved successfully', user });
}).put(async (req, res) => {
  const user = await api.updateUser(req.params.id, req.body);

  if (!user) res.status(500).json({ message: 'Failed to update user' });

  res.json({ message: 'User updated successfully', user });
}).delete(async (req, res) => {
  const user = await api.deleteUser(req.params.id);

  if (!user) res.status(500).json({ message: 'Failed to delete user' });

  res.json({ message: 'User deleted successfully', user });
});

module.exports = router;
