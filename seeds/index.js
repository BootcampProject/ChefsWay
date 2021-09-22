const seedUsers = require('./user-seeds');
const seedRecipies = require('./recipie-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  // await sequelize.sync({ force: true });
  
  await seedUsers();

  await seedComments();

  await seedRecipies();

  process.exit(0);
};

seedAll();