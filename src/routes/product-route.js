const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-servicer');

router.get('/', controller.get);
router.get('/slug/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tags', controller.getByTag);
router.post('/',authService.isAdmin,controller.post);
router.put('/:id',authService.isAdmin, controller.put);
router.delete('/:id',authService.isAdmin, controller.delete);

module.exports = router;
