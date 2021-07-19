const { model, Schema } = require('mongoose');

const userSchema = Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  // favCoins: {
  //   type: [String],
  //   required: false
  // }
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
