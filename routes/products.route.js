const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all files are talking correctely.
// router.get('/test', product_controller.test);
router.get('/',product_controller.product_list);
router.post('/', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id', product_controller.product_update);
router.delete('/:id', product_controller.product_delete);
router.options('/', product_controller.product_options);

module.exports = router;

