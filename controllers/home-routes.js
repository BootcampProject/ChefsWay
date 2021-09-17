const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipie, User, Comment} = require('../models');
const withAuth = require ('../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Recipie.findAll({
      include: [ User
      ]
    })
      .then(dbRecipie => {
        const recipies = dbRecipie.map(recipie => recipie.get({ plain: true }));
        console.log(dbRecipie);
  
        res.render('homepage', {
          recipies,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get("/new-recipie", (req, res) => {
    
  
    res.render("new-recipie");
  });
  
  module.exports = router;