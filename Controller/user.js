import {User} from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";


export const register =  async (req,res)=>{
    const {name,email,password} = req.body

   try {
    let user = await User.findOne({email})

    if(user) return res.json({message:"User Already exist"});

    const hashPass = await bcrypt.hash(password,10)

    user = await User.create({name,email,password:hashPass})

    res.json({message:"User Register Successfully..!",user})
    
   } catch (error) {
    res.json({message:error})
   }
}

export const login = async (req,res) =>{
    const {email,password} = req.body

    try {
        let user = await User.findOne({email});
         console.log("User is coming from login ",user)

        if(!user) return res.json({message:"User not exist..!"})

        const validPass = await bcrypt.compare(password,user.password);

        if(!validPass) return res.json({message:"Invalid credentials"});
      
        const token = jwt.sign({userId:user._id},"!@@#$%#%^&&*()",{
            expiresIn:'1d'
        })

        res.json({message:`Welcome ${user.name}`,token})

    } catch (error) {
        res.json({message:error.message})
    }
}

export const profile = async (req,res) =>{
    res.json({user : req.user})
}