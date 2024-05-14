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
  teleNumber: String,
  Email: String,
  addressLine1: String,
  addressLine2: String,
  addressLine3: String,
  addressLine4: String,
  nominatedAccess: String,
  nomineeName: String,
  nomineeRelation: String,
  nomineeAddressSame: String,
  nomineeHomeAddress: String,
  nomineeAddressType: String,
  nomineeResidentialCategory: String,
});

module.exports = mongoose.model('Student', studentSchema);