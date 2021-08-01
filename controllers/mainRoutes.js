const router = require('express').Router();

// added 
const { BlogPosts, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/',  (req, res) => {
    res.render('login')
})
module.exports = router;

//signup
// TODO: checking 
// router.get('/signup',  (req, res) => {
router.get('/signup',  (req, res) => {
    res.render('signup')
})
module.exports = router;


// TODO: route that redirects user to their dashboard 
// added 
// Use withAuth middleware to prevent access to route
// router.get('/dashboard', withAuth, async (req, res) => {
router.get('/dashboard', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: BlogPosts}],
      });
  
      const user = userData.get({ plain: true });
      console.log(user); 
      // dashboard.handlebars
      res.render('dashboard', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });