const express=require('express')
const route=express.Router();
const bcrypt=require('bcryptjs')
const Users=require('../models/Users')//coming back from that folder to another
const config=require('config')
const jwt=require('jsonwebtoken')
const auth=require('../middleware/auth')


route.post('/login',[
    // check('name','Please add a name').not().isEmpty(),
    check('email','Please enter a valid email').isEmail(),
    check('password','Please enter a password with atlest 6 characters').exists()
],
async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
    }
    const{email,password}=req.body
    try{
        let user=await Users.findOne({email})//email:req.body.email shoul
        if(!user){
            return res.status(400).send("Inavlid user")
        }
 else{
        user=new Users({
          
            email,
            password
        })
        isMatch=bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).send("Invalid user")
        }

        // const salt=await bcrypt.genSalt(10);
        // user.password=await bcrypt.hash(password,salt);
        // await user.save();
    }
    
    const payload={
        user:{
            id:user.id
        }
    }
    jwt.sign(
        payload,
        config.get("jwtSecret"),
        (err,token)=>{
            if(err) throw err;
            res.json({token})
        }
    )
    }
    catch(err){
        console.error(err.message);
        process.exit(1)
    }

})