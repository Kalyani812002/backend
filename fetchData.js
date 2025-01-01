// src/routes/fetchData.js
const axios = require('axios');
const ProductTransaction = require('../models/productTransaction');

const fetchDataAndStore = async () => {
  try {
    // Fetch data from the third-party API
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const data = response.data;

    // Insert the data into MongoDB
    const productTransactions = data.map(transaction => ({
      productId: transaction.product_id,
      transactionDate: new Date(transaction.transaction_date),
      amount: transaction.amount,
      customerId: transaction.customer_id,
    }));

    await ProductTransaction.insertMany(productTransactions);
    console.log('Data successfully inserted into database');
  } catch (error) {
    console.error('Error fetching or inserting data:', error);
  }
};

module.exports = fetchDataAndStore;
