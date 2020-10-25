const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyId: { type: Number },
    company: { type: String },
    speciality: { type: String },
    industryType: { type: String },
    subindustryType: { type: String },
    empSizeFrom: { type: Number },
    empSizeTo: { type: Number},
})

const Company = mongoose.model('Company', companySchema);
// console.log(Company.find({ IndustryType1: "Mining", SubIndustryType1: "Mining" }));

module.exports = Company;