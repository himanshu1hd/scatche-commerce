const jwt=require("jsonwebtoken");
const userModel=require("../models/usersmodel");

module.exports=async function(req,res,next){
    if(!req.cookie.token){
        req.flash("error","You must be logged in to access this page")
        return res.redirect("/login");
    }
    try {
        let decoded=jwt.verify(req.cookie.token,process.env.JWT_SECRET_KEY);
        let user=await userModel.findOne({email:decoded.email}).select("-password");
        req.user=user;
        next();
    } catch (error) {
        req.flash("error","Something went wrong, please login again");
        res.redirect("/");
    }
}