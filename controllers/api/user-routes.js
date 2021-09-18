const router = require('express').Router();
const { User, Recipie, Comment} = require('../../models');
const withAuth = require ('../../utils/auth');


router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUser => {
      req.session.save(() => {
        req.session.user_id = dbUser.id;
        req.session.username = dbUser.username;
        req.session.loggedIn = true;
  
        res.json(dbUser);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUser => {
    if (!dbUser) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUser.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUser.id;
      req.session.username = dbUser.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUser, message: 'You are now logged in!' });
    });
  }).catch(err => console.log (err))
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUser => {
      if (!dbUser) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUser => {
      if (!dbUser) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
