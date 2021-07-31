// User 
    // name 
    // password 
    // username

// Dashboard > user's BlogPosts
    // create post
    // title 
    // content 


    const User = require('./User');
    const BlogPosts = require('./BlogPosts');
    
    User.hasMany(BlogPosts, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
    
    BlogPosts.belongsTo(User, {
      foreignKey: 'user_id'
    });
    
    module.exports = { User, BlogPosts };
    
