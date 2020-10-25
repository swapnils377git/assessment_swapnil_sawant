var mongoose = require("mongoose");
const express = require("express");
const app = express();
var port = 5000;
var Company = require("./models/company.model");
const router = express.Router();
var uri = "mongodb://65.0.82.82:27017/admin";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const companyRoute = require('./routes/company');

// app.use('/', loginRoute);

app.use('/', router);

router.route("/company").get(function (req,res, next) {
    Company.find({ IndustryType1: "Mining", SubIndustryType1: "Mining" }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(port, function () {
    console.log("server is running n port " + port);
});