const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipie, User, Comment} = require('../models');
const withAuth = require ('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Recipie.findAll({
    where: {
      user_id: req.session.user_id
    },
  })
    .then(dbRecipie => {
      const recipies = dbRecipie.map(recipie => recipie.get({ plain: true }));
      res.render('dashboard', { recipies, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/recipie/:id', withAuth, (req, res) => {
  Recipie.findByPk(req.params.id, {include: [User, {
    model: Comment,
    include: [User]
  }]})
    .then(dbRecipie => {
      if (dbRecipie) {
        const recipie = dbRecipie.get({ plain: true });
        console.log(recipie , "<=====================");
        res.render('single-recipie', {
          recipie,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.get('/edit/:id', withAuth, (req, res) => {
  Recipie.findByPk(req.params.id, {
  })
    .then(dbRecipie => {
      if (dbRecipie) {
        const recipie = dbRecipie.get({ plain: true });
        
        res.render('edit-recipie', {
          recipie,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/add-recipie", withAuth, (req, res) => {
  res.render("add-recipie", {
    layout: "dashboard"
  });
});

module.exports = router;