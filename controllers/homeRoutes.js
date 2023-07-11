const router = require('express').Router();

router.get('^/$|/index(.html)?', (req, res) => {
  res.render('home');
});

router.get('*', (req, res) => {
  res.render('404', { layout: 'solo' });
});

module.exports = router;