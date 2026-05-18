const express = require('express');
const router = express.Router();
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductStats
} = require('../controllers/productController');

// Routes
router.post('/', createProduct);           // CREATE
router.get('/', getProducts);               // READ ALL with filters
router.get('/stats', getProductStats);      // GET STATISTICS
router.get('/:id', getProductById);         // READ ONE
router.put('/:id', updateProduct);          // UPDATE
router.delete('/:id', deleteProduct);       // DELETE

module.exports = router;