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
                    const token = jwt.sign({name:exist.name, email: exist.email, role: exist.role, id: exist._id}, 'secret-key');
                    res.status(200).json({
                        token
                    })
                }
            }
        } catch (error) {
            // next(error)
            next({code: 500, message: err.message})
        }
    }
    static getProfile = async (req, res, next) => {
       try {
            const own = await User.findOne({email: req.user.email}).select('-password -__v');
            res.status(200).json(own)
       } catch(err) {
            next({code: 500, message: err.message})
       }
    }
    static patch = async (req, res, next) => {
        try {
            const updated = await User.findByIdAndUpdate(req.user.id, {...req.body}, {runValidators: true, new: true});
            res.status(200).json(updated)
        } catch(err) {
            next({code: 500, message: err.message})
        }
    }
    static Register = async (req, res, next) => {
        try {
             let { name, email, password,role } = req.body;
             if (!email.includes("@")) {
                 return next({code:400,message: "Invalid email"})
                 
             }
             let exist = await User.findOne({
                 email
             })
             if(exist){
                 next({code:409, message: "This email is already registered"})
             } else {
                password = bcrypt.hashSync(password,8);
                const newUser = {
                    name,
                    email,
                    password,
                    role
                };
                const regisUser = await User.create(newUser);
                res.status(201).json({
                   regisUser,
                });
             }
           
        } catch (error) {
          next({code: 500, message: error.message});
        }
    };
}

module.exports = Users