const { model, Schema } = require('mongoose');

const transactionSchema = Schema({
  type: {
    type: String,
    required: true,
    trim: true
  },
  coin: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  spent: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('Transactions', transactionSchema);
