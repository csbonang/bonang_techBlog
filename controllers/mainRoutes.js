const router = require('express').Router();

// added 
const { BlogPosts, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/',  (req, res) => {
    res.render('login')
})
module.exports = router;


// TODO: route that redirects user to their dashboard 
// added 
// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('blogposts', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });