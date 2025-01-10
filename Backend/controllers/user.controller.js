import User from "../models/user.model.js"
import Student from "../models/student.model.js"
import Teacher from "../models/teacher.model.js"
import bcrypt from "bcrypt"
import generateToken from "../config/generateToken.js"

 export const registerUser=async(req,res)=>{
    const{name,email,password,role,class:studentClass,rollNumber,department,subjects}=req.body;
     try {
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'User already exists'});
        }
        //hash password
        const hashpassword=await bcrypt.hash(password,10);

        //create user
        const user=await User.create({
            name,email,password:hashpassword,role
        })
        if(role==='student'){
            await Student.create({
                userId:user._id,
                class:studentClass,
                rollNumber
            })
        }
        else if(role==='teacher'){
          await Teacher.create({
            userId:user._id,
            department,
            subjects
          })

        }
        res.status(201).json({message:"User registered successfully"})
     } catch (error) {
        res.status(501).json({message:"Server error",error})
     }
  
}

export const loginUser=async(req,res)=>{
  const {email,password}=req.body;
  try {
    const user=await User.findOne({email});
    if(!user){
      res.status(401).json({message:'Invalid username or password'})
    }
    const isPassword=await bcrypt.compare(password,user.password);
    if(!isPassword){
      res.status(401).json({message:'Invalid username or password'})
    }

    const token=generateToken(user);

    let roleSpecificData={};
    if(user.role==='student'){
      let studentData=await Student.findOne({userId:user._id});
      if(!studentData){
        res.status(404).json({message:'Student details not found'})
      }
      roleSpecificData={
        class:studentData.class,
        rollNumber:studentData.rollNumber
      }
    } else if(user.role==='teacher'){
      let teacherData=await Teacher.findOne({userId:user._id});
      if(!teacherData){
        res.status(404).json({message:'Teacher details not found'});
      }
      roleSpecificData={
        department:teacherData.department,
        subjects:teacherData.subjects
      }
    }

   res.status(200).json({
    token,
    user:{
      id:user._id,
      name:user.name,
      email:user.email,
      role:user.role,
      ...roleSpecificData
    },
    message:"Welcome to the dashboard"
   })
  } catch (error) {
    
  }
}