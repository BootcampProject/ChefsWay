const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This recipe was simply amazing! My kids loved it when I made it for Thanksgiving last year.',
    user_id: 1,
  },
  {
    comment_text: 'I was even able to use this for a veggie version! You should definitely make a veggie version of this!',
    user_id: 2,
  },
  {
    comment_text: 'Did anyone have to add more salt than what the recipe called for?',
    user_id: 3,
  },
  {
    comment_text: 'I am going to save this recipe for this upcoming Thanksgiving dinner!!!!! Im so excited, OMG!',
    user_id: 4,
  },
  {
    comment_text: 'I made this for my friends birthday party yesterday and it was a hit! Please post more variations of this!',
    user_id: 5,
  },
  {
    comment_text: 'I loved this recipe sooooo much!!!!',
    user_id: 6,
  },
  {
    comment_text: 'I am super excited to cook this for my family!',
    user_id: 7,
  },
  {
    comment_text: 'My kids lovvvvedddd this.',
    user_id: 8,
  },
  {
    comment_text: 'My partner and I devoured this dish last night!!',
    user_id: 9,
  },
  {
    comment_text: 'I would cook this every night if I could!',
    user_id: 10,
  },
  {
    comment_text: 'My wife loved this dish.',
    user_id: 8,
  },
  {
    comment_text: 'I wonder if we could do a veggie option for this?',
    user_id: 9,
  },
  {
    comment_text: 'I just cooked this for dinner tonight and its in the oven right now. I cant wait to eat it.',
    user_id: 7,
  },
  {
    comment_text: 'This was so quick and easy to make I love it!!',
    user_id: 6,
  },
  {
    comment_text: 'This dish is to dieeee forrrrr!',
    user_id: 5,
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;