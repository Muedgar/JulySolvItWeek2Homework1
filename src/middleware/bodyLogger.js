
const bodyLogger = (req,res,next) => {
    console.log({"data from user is logged here": req.body});
    next();
}

module.exports = bodyLogger;