const sequelize = require('../config/connection');
const { User, Recipie } = require('../models');

const userdata = [
  {
    username: 'Clark',
    email: 'clark@email.com',
    password: 'password123'
  },
  {
    username: 'Stan',
    email: 'stan@email.com',
    password: 'password123'
  },
  {
    username: 'kevin',
    email: 'kevin@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;