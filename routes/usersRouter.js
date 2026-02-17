const express = require('express');
const router = express.Router();
const isLoggedin=require("../middlewares/isLoggedin");
const {registerUser,loginUser,logout}=require("../controllers/authcontroller");

router.get("/login",function(req,res){
    res.send("hey it's working");
});

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/logout",logout);

module.exports=router;  
