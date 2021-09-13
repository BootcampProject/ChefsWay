const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Comment One.',
    user_id: 1,
  },
  {
    comment_text: 'Comment Two.',
    user_id: 2,
  },
  {
    comment_text: 'Comment Three.',
    user_id: 3,
  },
  {
    comment_text: 'Comment Four.',
    user_id: 3,
  },
  {
    comment_text: 'Comment Five.',
    user_id: 1,
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;