const apiRouter = require('express').Router();

apiRouter.use('/posts', require('./posts'));
apiRouter.use('/users', require('./users'));

module.exports = apiRouter;
