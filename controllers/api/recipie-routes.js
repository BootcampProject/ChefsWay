const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Recipie, User, Comment} = require('../../models');
const withAuth = require ('../../utils/auth');


router.post('/', withAuth, (req, res) => {
  Recipie.create({
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    table_meals: req.body.table_meals,
    directions: req.body.directions,
    user_id: req.session.user_id
  })
    .then(dbRecipie => res.json(dbRecipie))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.put('/:id', withAuth, (req, res) => {
  Recipie.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbRecipie => {
      if (!dbRecipie) {
        res.status(404).json({ message: 'No Recipie found with this id' });
        return;
      }
      res.json(dbRecipie);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Recipie.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRecipie => {
      if (!dbRecipie) {
        res.status(404).json({ message: 'No Recipie found with this id' });
        return;
      }
      res.json(dbRecipie);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;