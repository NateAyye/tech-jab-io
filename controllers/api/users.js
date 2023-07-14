const router = require('express').Router();
const api = require('../../utils/api');

router.post('/sign-up', async (req, res) => {
  const foundUser = await api.getUserByEmail(req.body.email);
  if (foundUser)
    return res.status(409).json({ message: 'Email Already Exists!' });

  const userData = await api.createUser(req.body);
  console.log(userData);

  if (!userData)
    return res.status(500).json({ message: 'Failed to create user' });

  // Save the session so the user can be logged in
  req.session.save((err) => {
    if (err) return res.status(500).json({ message: 'Failed to save session' });
    const user = userData.get({ plain: true });
    delete user.password;
    req.session.loggedIn = true;
    req.session.user = user;
    res.status(201).json({ message: 'User Signedup successfully', user });
  });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const foundUser = await api.getUserByEmail(email, false);
  if (!foundUser)
    return res.status(409).json({ message: 'No User with that Email' });

  const validPassword = foundUser.checkPassword(password);

  if (!validPassword)
    return res.status(409).json({ message: 'Incorrect Password' });

  // TODO: Save the session so the user can be logged in
  req.session.save((err) => {
    if (err) return res.status(500).json({ message: 'Failed to save session' });
    const user = foundUser.get({ plain: true });
    delete user.password;
    req.session.loggedIn = true;
    req.session.user = user;
    res.json({ message: `Logged in with email: ${email}`, user: foundUser });
  });
});

router.post('/logout', (req, res) => {
  if (req?.session?.loggedIn) {
    req.session.destroy(() => {
      return res.status(204).end();
    });
  } else {
    return res.status(404).end();
  }
});

router
  .route('/')
  .get(async (req, res) => {
    const { order, orderBy } = req?.query;
    const users = await api.getUsers(order, orderBy);
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

router
  .route('/:id')
  .get(async (req, res) => {
    const user = await api.getUser(req.params.id);
    if (!user) res.status(409).json({ message: 'No User with that ID' });
    res.json({ message: 'User retrieved successfully', user });
  })
  .put(async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    const user = await api.updateUser(parseInt(req.params.id), req.body);
    if (!user)
      return res.status(500).json({ message: 'Failed to update user' });
    req.session.save((err) => {
      if (err)
        return res.status(500).json({ message: 'Failed to save session' });
      req.session.user = user.get({ plain: true });
      res.json({ message: 'User updated successfully', user });
    });
  })
  .delete(async (req, res) => {
    const user = await api.deleteUser(req.params.id);
    if (!user) res.status(500).json({ message: 'Failed to delete user' });
    res.json({ message: 'User deleted successfully', user });
  });

module.exports = router;
