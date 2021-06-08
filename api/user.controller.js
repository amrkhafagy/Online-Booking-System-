const UserServices = require('../services/user.services');
exports.registerUser = async (req,res) => {

    var user = await UserServices.getUserByEmail({email:req.body.email});

    console.log("User",user);
    if(user) { 
        return res.status(409).json({
            error:"User already exists "
        }); 
    }

    user = await UserServices.create(req.body);
    res.status(201).json({
        message: "User Created Success",
        name: user.name,
        email: user.email
    });
