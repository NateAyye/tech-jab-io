const router = require('express').Router();
const api = require('../../utils/api');

// Sign Up Route
router.post('/sign-up', async (req, res) => {
  // Check if the user already exists
  const foundUser = await api.getUserByEmail(req.body.email);
  // If the user exists, return an error
  if (foundUser)
    return res.status(409).json({ message: 'Email Already Exists!' });

  // Create the user
  const userData = await api.createUser(req.body);

  // If the user creation fails, return an error
  if (!userData)
    return res.status(500).json({ message: 'Failed to create user' });

  // Save the session so the user can be logged in
  req.session.save((err) => {
    // If the session fails to save, return an error
    if (err) return res.status(500).json({ message: 'Failed to save session' });
    const user = userData.get({ plain: true });
    delete user.password;
    // Otherwise, save the session and return a success message with the user object
    req.session.loggedIn = true;
    req.session.user = user;
    res.status(201).json({ message: 'User Signedup successfully', user });
  });
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // Check if the user exists
  const foundUser = await api.getUserByEmail(email, false);
  // If the user doesn't exist, return an error
  if (!foundUser)
    return res.status(409).json({ message: 'No User with that Email' });

  // Check if the password is correct
  const validPassword = foundUser.checkPassword(password);

  // If the password is incorrect, return an error
  if (!validPassword)
    return res.status(409).json({ message: 'Incorrect Password' });

  // Save the session so the user can be logged in
  req.session.save((err) => {
    // If the session fails to save, return an error
    if (err) return res.status(500).json({ message: 'Failed to save session' });
    // Otherwise, save the session and return a success message with the user object
    const user = foundUser.get({ plain: true });
    delete user.password;
    req.session.loggedIn = true;
    req.session.user = user;
    res.json({ message: `Logged in with email: ${email}`, user: foundUser });
  });
});

// Logout Route
router.post('/logout', (req, res) => {
  // If the user is logged in, destroy the session and return a success message
  if (req?.session?.loggedIn) {
    req.session.destroy(() => {
      return res.status(204).end();
    });
  } else {
    // If the user is not logged in, return an error
    return res.status(404).end();
  }
});

// Route: /api/users
router
  .route('/')
  // GET all users
  .get(async (req, res) => {
    // Get the order and orderBy query parameters
    const { order, orderBy } = req?.query;
    // Get all users from the database based on the order and orderBy query parameters
    const users = await api.getUsers(order, orderBy);
    // If there are no users, return an error
    if (!users) res.status(500).json({ message: 'Failed to get users' });
    // Otherwise, return the users
    res.json({ message: 'Users retrieved successfully', users });
  })
  // POST a new user
  .post(async (req, res) => {
    // Check if the user already exists
    const foundUser = await api.getUserByEmail(req.body.email);
    // If the user exists, return an error
    if (foundUser)
      return res.status(409).json({ message: 'Email Already Exists!' });
    // Create the user
    const user = await api.createUser(req.body);
    // If the user creation fails, return an error
    if (!user)
      return res.status(500).json({ message: 'Failed to create user' });
    // Otherwise, return a success message with the user object
    res.json({ message: 'User created successfully', user });
  });

// Route: /api/users/:id
router
  .route('/:id')
  // GET a single user
  .get(async (req, res) => {
    // Get the user from the database
    const user = await api.getUser(req.params.id);
    // If there is no user, return an error
    if (!user) res.status(409).json({ message: 'No User with that ID' });
    // Otherwise, return the user
    res.json({ message: 'User retrieved successfully', user });
  })
  // PUT a single user
  .put(async (req, res) => {
    // Update the user in the database
    const user = await api.updateUser(parseInt(req.params.id), req.body);
    // If the user update fails, return an error
    if (!user)
      return res.status(500).json({ message: 'Failed to update user' });
    // Otherwise, save the session and return a success message with the user object
    req.session.save((err) => {
      // If the session fails to save, return an error
      if (err)
        return res.status(500).json({ message: 'Failed to save session' });
      // Otherwise, save the session and return a success message with the user object
      req.session.user = user.get({ plain: true });
      res.json({ message: 'User updated successfully', user });
    });
  })
  // DELETE a single user
  .delete(async (req, res) => {
    // Delete the user from the database
    const user = await api.deleteUser(req.params.id);
    // If the user deletion fails, return an error
    if (!user) res.status(500).json({ message: 'Failed to delete user' });
    // Otherwise, return a success message with the user object
    res.json({ message: 'User deleted successfully', user });
  });

module.exports = router;
