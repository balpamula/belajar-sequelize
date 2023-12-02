const bookController = require('../controllers/book');
const router = require('express').Router();
const { celebrate, Segments } = require('celebrate');
const schema = require('../utils/bookValidation');
const { bookValidator, runValidaton } = require('../utils/bookValidator')

// router.post('/', celebrate({ [Segments.BODY]: schema.bookCreate }), bookController.create);
router.post('/', bookValidator, runValidaton, bookController.create);
router.get('/', bookController.findAll);
router.put('/:id', bookController.update);
// router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);
router.get('/:id', bookController.findOne);

module.exports = router;
