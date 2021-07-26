const { model, Schema } = require('mongoose');
const Transactions = require('./transaction.model');

const userSchema = Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  transactions: [{
    type: Object,
    ref: [Transactions]
  }],
  favCoins: {
    type: [String],
    required: false
  }
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
