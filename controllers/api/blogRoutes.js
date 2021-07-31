const router = require('express').Router();
const { BlogPosts } = require('../../models');

// create a get 
// user-id 
// blog posts 
// req.session.user_id,

// dashboard 


router.post('/', async (req, res) => {
  console.log("POST blog")
  try {
    const newBlogPosts = await BlogPosts.create({
      ...req.body
      // user_id: req.session.user_id,
    });
    console.log(req.body); 

    res.status(200).json(newBlogPosts);
  } catch (err) {
    console.log(err); 
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const blogPostsData = await BlogPosts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogPostsData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(blogPostsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
