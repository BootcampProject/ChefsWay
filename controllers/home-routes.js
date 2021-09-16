const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipie, User, Comment} = require('../models');
const withAuth = require ('../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      include: [ User
      ]
    })
      .then(dbPost => {
        const posts = dbPost.map(post => post.get({ plain: true }));
        console.log(dbPost);
  
        res.render('homepage', {
          posts,
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

  router.get("/new-post", (req, res) => {
    
  
    res.render("new-post");
  });
  
  module.exports = router;