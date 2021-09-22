const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const recipieRoutes = require('./recipie-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/recipie', recipieRoutes);
router.use('/comments', commentRoutes);

module.exports = router;