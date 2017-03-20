const db = require('./mongoConnection'),
  Schema  = db.Schema;

const userSchema = Schema({
  username: { type: [String], index: true },
  email: String,
  firstName: String,
  lastName: String,
  skills: { type: [String], index: true }
})



module.exports = db.model('userdetails',userSchema,'userdetails');