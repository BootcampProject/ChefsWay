const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require ('../../utils/auth');


router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbComment => res.json(dbComment))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  console.log(req.body);
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbComment => {
      console.log(dbComment + "HI THere");
      res.json(dbComment)
    
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbComment => {
      if (!dbComment) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;