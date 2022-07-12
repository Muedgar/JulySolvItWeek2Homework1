const express = require("express");
const router = require("./src/routes/router");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({message: "app ready to receive requests"});
});

app.use(router);

app.listen(3000, ()=> {
    console.log("server running on port http://localhost:3000");
});