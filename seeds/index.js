const seedComments = require('./commentSeeds');
const seedPosts = require('./postSeeds');
const seedUsers = require('./userSeeds');
const sequelize = require('../config/connection');

(async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

  process.exit(0);
})();
