const UserSchema = require('../Schema/UserSchema')
const encrypt = require('../Utils/encrypt')

const addUser = async (req,res) => {
     
    const hash = await encrypt.encryptePassword(req.body.password)

    const UserData = {
        name : req.body.name,
        email : req.body.email,
        password : hash,
        phone : req.body.phone,
        role : req.body.role
    }
    const user = new UserSchema(UserData) // we can write "const user = new UserSchema(req.body) to add user without encrypted password."
    
    user.save((err,data) => {
        if(err){
            res.status(500).json({
                message : "Error while adding data",
                Error : err
            })
        }else{
            res.status(201).json({
                message : "the data has been added successfully",
                data : data
            })
        }
    })
}

const getAllUsers = (req, res) => {

    UserSchema.find((err,data) => {
        if(err){
            res.status(500).json({
                message : "Error fetching data"
            })
        }else{
            res.status(200).json({
                message : "Data found successfully",
                data : data
            })
        }
    } )
}

const loginUser = (req, res) => {
    UserSchema.findOne({ email: req.body.email })
      .populate('role')
      .exec(async (err, data) => {
        if (err) {
          res.status(500).json({
            message: "Error while login",
            error: err
          })
        } else if (!data) {
          res.status(404).json({
            message: "User not found"
          })
        } else {
          try {
            const result = await encrypt.comparePassword(req.body.password, data.password)
  
            if (result) {
              res.status(201).json({
                message: "Login successful",
                data: data
              })
            } else {
              res.status(401).json({
                message: "Password is incorrect"
              })
            }
          } catch (error) {
            res.status(500).json({
              message: "Error while comparing passwords",
              error: error
            })
          }
        }
      })
  }
  
//loginUser without encrypted password//

// const loginUser = (req,res) => {
     
//     var email = req.body.email
//     var password = req.body.password


//     if(email != undefined && password != undefined && email != "" && password != "") {
//     UserSchema.find({email : email, password : password},(err,data) => {
//         if(err){
//             res.status(500).json({
//                 message : "Error while login"
//             })
//         }else {
//             if(data != null && data != undefined && data.length >0){
//                 res.status(200).json({
//                     message : "User login successfully...",
//                     data : data
//                 })
//             }else{
//                 res.status(400).json({
//                     message : "User not found..."
//                 })
//             }
//         }
//     })

//     }
// }

const getUser = (req,res) => {
    const id = req.params.id

    UserSchema.findById(id,(err,data) => {
        if(err) {
            res.status(500).json({
                message : "user not found"
                
            })
        }else{
            res.status(200).json({
                message : "user found",
                data : data
            })
        }
    })
}

const deleteUser = (req,res) => {

    const id = req.params.id

    UserSchema.findByIdAndDelete(id,(err,data)=> {
        if(err){
            res.status(500).json({
                message: "Error deleting data"
            })
        }else{
            res.status(200).json({
                message : "Data deleted..",
                data : data
            })
        }
        
    })
}

module.exports = {
    addUser,
    getAllUsers,
    loginUser,
    getUser,
    deleteUser
}