const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

// Define the model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
})

// On save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
  // Get access to the user model
  const user = this;

  // Generate a Salt (takes some mms), then run callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) };

    // Hash our password using the salt
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err) }

      //Overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, function(err,isMatch){
    if(err) {return callback(err)}
    callback(null,isMatch)
  })
}

//Create model class
const ModelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = ModelClass;