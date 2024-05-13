const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: String,
  title: String,
  gender: String,
  name: String,
  lastname: String,
  prvName: String,
  preferredName: String,
  dateOfBirth: String,
  mobileNumber: String,
  Email: String,
  nominatedAccess: String,
  nomineeName: String,
  nomineeRelation: String,
  nomineeAddressSame: String,
  nomineeHomeAddress: String,
  nomineeAddressType: String,
  nomineeResidentialCategory: String,
});

module.exports = mongoose.model('Student', studentSchema);