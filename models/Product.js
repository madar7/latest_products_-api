const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxlength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative'],
        max: [1000000, 'Price cannot exceed 1,000,000']
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot exceed 500 characters']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Toys', 'Sports', 'Other'],
        default: 'Other'
    },
    featured: {
        type: Boolean,
        default: false
    },
    inStock: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    company: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true
    },
    imageUrl: {
        type: String,
        default: 'https://via.placeholder.com/300x200?text=No+Image'
    }
}, {
    timestamps: true // Adds createdAt and updatedAt automatically
});

// Add index for better search performance
productSchema.index({ name: 'text', company: 'text', category: 'text' });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;