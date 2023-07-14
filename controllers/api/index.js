const apiRouter = require('express').Router();

apiRouter.use('/comments', require('./comments'));
apiRouter.use('/posts', require('./posts'));
apiRouter.use('/users', require('./users'));

module.exports = apiRouter;
