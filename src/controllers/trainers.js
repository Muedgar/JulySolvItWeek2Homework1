const fs = require("fs");
const uuid = require("uuid").v4;
const path = require("path");
const dataPath = path.join(__dirname,"../models","trainers.json");

const createTrainer = (req,res) => {
    try {
        // get data
    const {id, name,stack} = req.body;
    // store to json
    let obj = {
        id:id,
        name:name,
        stack:stack
    };

// Storing the JSON format data in myObject
var data = fs.readFileSync(dataPath);

var myObject = JSON.parse(data);
console.log(myObject);

// Adding the new data to our object
let keyId = uuid();
myObject[keyId] = obj;

// Writing to our JSON file
var newData2 = JSON.stringify(myObject);


    console.log(dataPath);
    fs.writeFileSync(dataPath, newData2);
    // first get all data and store them in a temporary variable
    res.status(200).json({message: "trainee created."});

    } catch (error) {
        console.log("Error: "+error.message);        
    }
}

const getTrainers = (req,res)=> {
    try {
        const jsonData = fs.readFileSync(dataPath)
        res.status(200).json(JSON.parse(jsonData));
    } catch (error) {
        console.log("Error: "+error.message);
    }
}

const updateTrainers = (req,res)=> {
    try {
        const jsonData = fs.readFileSync(dataPath)
        let allTrainees = JSON.parse(jsonData);
  fs.readFile(dataPath, 'utf8', (err, data) => {
    const traineeId = req.params['id'];
    allTrainees[traineeId] = req.body;

    // Writing to our JSON file
var newData2 = JSON.stringify(allTrainees);


console.log(dataPath);
fs.writeFileSync(dataPath, newData2);
// first get all data and store them in a temporary variable
res.status(200).json({message: "trainee updated."});
}, true);
    } catch (error) {
        console.log("Error: "+error.message);
    }
}


const deleteTrainer = (req,res)=> {
    try {
        const jsonData = fs.readFileSync(dataPath)
        let allTrainees = JSON.parse(jsonData);
  fs.readFile(dataPath, 'utf8', (err, data) => {
    const traineeId = req.params['id'];
    delete allTrainees[traineeId];

    // Writing to our JSON file
var newData2 = JSON.stringify(allTrainees);


console.log(dataPath);
fs.writeFileSync(dataPath, newData2);
// first get all data and store them in a temporary variable
res.status(200).json({message: "trainee deleted."});
}, true);
    } catch (error) {
        console.log("Error: "+error.message);
    }
}

module.exports = {createTrainer,getTrainers,updateTrainers,deleteTrainer};