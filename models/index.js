const Recipie = require('./recipies');
const User = require('./users');
const Comment = require('./comments');

Recipie.belongsTo(User, {
    foreignKey: "user_id",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
});

Recipie.hasMany(Comment, {
    foreignKey: "post_id",
})

// User.hasMany(Recipie, {
//     foreignKey: "user_id",
// })

module.exports = { User, Recipie, Comment };
