const router = require('express').Router();
const postController = require('../../controllers/postController');

// ! if full url matches with '/api/posts/'
router.route('/')
  .get(postController.findAll)
  .post(postController.create);

// ! if full url matches with '/api/posts/:id'
router.route('/:id')
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.delete);

module.exports = router;
