const router = require('express').Router();
let Company = require('../models/company.model');

router.route('/').get((req, res) => {
    Company.find({ IndustryType1: "Mining", SubIndustryType1: "Mining" })
        .then(company => res.send(company))
        // .then(company => res.json(company))
        .catch(err => res.status(400).json('No such company ' + err));
});

module.exports = router;