// const express = require('express');
// const router = express.Router();
// const ownersmodel=require("../models/ownersmodel");

// // router.get("/login",(req,res)=>{
// //     res.send("hey it's working");
// // });

// if(process.env.NODE_ENV==="development"){
//     router.post("/create",async function (req,res)=>{
//     let owners=await ownermodel.find();
//     if(owners.length>0){
//         return res
//         .status(503)
//         .send("You don't have permission to access this route")
//     }
//     let {fullname,email,password}=req.body;
//     let createdOwner=await ownerModel.create({
//         fullname,
//         email,
//         password,
//     });
//     res.status(201).send(createdOwner);
// });
// }

// router.get("/adminpanel",(req,res)=>{
//     res.send("hey it's working");
// });

// module.exports=router;

const express = require('express');
const router = express.Router();
const ownersmodel = require("../models/ownersmodel");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      let owners = await ownersmodel.find();
      if (owners.length > 0) {
        return res
          .status(503)
          .send("You don't have permission to access this route");
      }
      let { fullname, email, password } = req.body;

      let createdOwner = await ownersmodel.create({
        fullname,
        email,
        password,
      });

      res.status(201).send(createdOwner);

    } catch (err) {
      res.status(500).send(err.message);
    }
  });
}

router.get("/adminpanel", (req, res) => {
  res.send("hey it's working");
});

module.exports = router;
