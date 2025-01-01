// src/models/productTransaction.js
const mongoose = require('mongoose');

const productTransactionSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  transactionDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  customerId: { type: String, required: true },
});

module.exports = mongoose.model('ProductTransaction', productTransactionSchema);
