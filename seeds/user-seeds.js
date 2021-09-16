const sequelize = require('../config/connection');
const { User, Recipie } = require('../models');

const userdata = [
  {
    username: 'Clark',
    email: 'clark@email.com',
    password: 'cakeClark2@'
  },
  {
    username: 'Stan',
    email: 'stan@email.com',
    password: 'password3!!!!'
  },
  {
    username: 'kevin',
    email: 'kevin@email.com',
    password: 'password000!'
  },
  {
    username: 'ShakeNBake',
    email: 'baker@email.com',
    password: 'password44422!'
  },
  {
    username: 'Chef101',
    email: 'alan1@email.com',
    password: 'password42320!'
  },
  {
    username: 'Alessia',
    email: 'alessia@email.com',
    password: 'password09864#'
  },
  {
    username: 'Cakes241',
    email: 'bakercakes@email.com',
    password: 'password4$'
  },
  {
    username: 'Yumm123',
    email: 'johnathan@email.com',
    password: 'password!@#$'
  },
  {
    username: 'Sandwiches10',
    email: 'sandwich@email.com',
    password: 'sandwhiches!'
  },
  {
    username: 'Snacker800',
    email: 'snacks@email.com',
    password: 'snacker!!!'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;