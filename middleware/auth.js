const redirectOnLoggedOut = (path) => {
  return (req, res, next) => {
    if (!req?.session?.loggedIn) {
      res.redirect(path);
    } else {
      next();
    }
  };
};

module.exports = { redirectOnLoggedOut };
