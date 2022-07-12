const {createTrainee,getTrainees,updateTrainees,deleteTrainee} = require("../controllers/trainees.js");
const {createTrainer,getTrainers,updateTrainers,deleteTrainer} = require("../controllers/trainers");
const {createStaff,getStaff,updateStaff,deleteStaff} = require("../controllers/staff");
const router = require("express").Router();
const bodyLogger = require("../middleware/bodyLogger.js");
// trainee routes
router.post('/create/trainee/',bodyLogger,createTrainee);
router.get('/read/trainee/',getTrainees);
router.patch('/update/trainee/:id',updateTrainees);
router.delete('/delete/trainee/:id',deleteTrainee);


// trainers routes
router.post('/create/trainers/',createTrainer);
router.get('/read/trainers/',getTrainers);
router.patch('/update/trainers/:id',updateTrainers);
router.delete('/delete/trainers/:id',deleteTrainer);

// staff routes
router.post('/create/staff/',createStaff);
router.get('/read/staff/',getStaff);
router.patch('/update/staff/:id',updateStaff);
router.delete('/delete/staff/:id',deleteStaff);



// staff routes
module.exports = router;