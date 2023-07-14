const router = require('express').Router();

// api routes
router.use('/api', require('./api'));

// post pages routes
router.use('/posts', require('./posts'));

// dashboard routes
router.use('/dashboard', require('./dashboard'));

// home routes
router.use('/', require('./homeRoutes'));

module.exports = router;
