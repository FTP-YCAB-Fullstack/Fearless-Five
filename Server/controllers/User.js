const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const User = require('./../models/userModel')

class Users {
    static Login = async (req,res,next) =>{
        try {
            const {email, password} = req.body;
            const exist = await User.findOne({email});
            if (!exist) {
                return res.status(401).json({
                    message: 'Error! Either email or Password Wrong'
                })
            } else {
                let pass = bcrypt.compareSync(password, exist.password)
                if (!pass) {
                    return res.status(401).json({
                        message: 'Error! Either email or Password Wrong'
                    })  
                } else {
                    const token = jwt.sign({name:exist.name, email: exist.email}, 'secret-key');
                    res.status(200).json({
                        token
                    })
                }
            }
        } catch (error) {
            // next(error)
            console.log(error)
        }
    }
    static Register = async (req, res, next) => {
        try {
             let { name, email, password } = req.body;
            //  if (!email.includes("@")) {
            //      return next({code:400,message: "Invalid email"})
            //  }
            //  let exist = await User.findOne({
            //      where:{
            //          email
            //      }
            //  })
            //  if(exist){
            //      next({code:409, message: "This email is already registered"})
            //  } else {
                console.log(password)
                password = bcrypt.hashSync(password,8)
                const newUser = {
                    name,
                    email,
                    password,
                };
                console.log(password)
                const regisUser = await User.create(newUser);
                res.status(201).json({
                   regisUser,
                });
            //  }
           
        } catch (error) {
        //   next(error);
          console.log(error)
        }
    };
}

module.exports = Users