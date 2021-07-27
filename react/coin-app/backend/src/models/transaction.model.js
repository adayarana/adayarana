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
}).method('toJSON', function toJson() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Transactions', transactionSchema);
