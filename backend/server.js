const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 500,
    // autoReconnect: true,
    authSource: 'admin',
    auth: {user: 'Test', password: 'Test@123'}
};
  
// const database = 'data';

const { MongoClient } = require("mongodb");

// Replace the following with values for your environment.
const username = encodeURIComponent("Test");
const password = encodeURIComponent("Test@123");
const clusterUrl = "65.0.82.82";
const port1 = 27017;
// const clusterUrl = "127.0.0.1";
const authMechanism = "SCRAM-SHA-256";

// Replace the following with your MongoDB deployment's connection string.
// const uri = process.env.MONGODB_URI;
const uri = `mongodb://${username}:${password}@${clusterUrl}:${port1}/data?authMechanism=${authMechanism}`;


mongoose.connect(uri, options);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!!');

    companyCollection = connection.collection('company');
    contactCollection = connection.collection('contact');

}).on('error', function () {
    console.log('Connection error: '.error);
}).on('disconnected', function () {
    console.log('MongoDB database connection');
});

// const usersRoute = require('./routes/users');
// const companyRoute = require('./routes/company');

// app.use('/users', usersRoute);
// app.use('/company', companyRoute);

app.get('/company/:type/:subtype', function (req, res) {
    companyCollection.find({ IndustryType1: req.params.type, SubIndustryType1: req.params.subtype }).toArray((err, company) => {
        if (err) {
            console.log("ERROR " + err);
            res.json(err);
        }
        //console.log(company);
        res.json(company);
    });
    
});

// async function run() {
//     mongoose.connect(uri, options);
//     const connection = mongoose.connection;
//     // console.log(connection);
//     try {
        
//         connection.once("open", () => {
//             console.log("Connected successfully to server");
//             console.log(connection);
//         })
        
//     } catch {
//         err => console.log(err.reason)
//     }
//     finally {
//         // Ensures that the client will close when you finish/error
//         await connection.close();
//     }
    
// }
// run().catch(console.dir);

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to connect to the server
// async function run() {
//   try {
//     // Connect the client to the server
//       await client.connect();
      
//     // Establish and verify connection
//     await client.db("data").command({ ping: 1 });
//       console.log("Connected successfully to server");
      
//     const dbo = client.db("data");

//     const companyCollection = dbo.collection("company");
//     //companyCollection.createIndex({ IndustryType1: 1 });

//       const queryCompanyIndustry = { IndustryType1: "Mining", SubIndustryType1: "Mining" };
//       const companyoptions = {
//           sort: { CompanyId: 1 },
//       };

//       const companycursor = companyCollection.find(queryCompanyIndustry);

//       //if no docs were found return
//       if ((await companycursor.count()) === 0) {
//           console.log("No docs found for company")
//       }

//       await companycursor.forEach(console.dir);

//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});