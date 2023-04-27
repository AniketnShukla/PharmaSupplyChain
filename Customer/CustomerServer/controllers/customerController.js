// const bcrypt  = require('bcrypt')
const fs = require('fs')
const path = require('path')
const asyncHandler = require('express-async-handler')
const Customer = require('../models/Customer')
const jwt = require('jsonwebtoken')  

//@desc Get all users
//@route Get /users
//@access Private

// const getAllusers = asyncHandler(async(req, res) => {
//     const users = await User.find().select('-password').lean()
//     if(!users) {
//         return res.status(400).json({
//             message: 'No users found'
//         })
//     }
//     res.json(users)
// })

//@desc Create new users
//@route POST /users
//@access Private
const createNewUser = asyncHandler(async(req, res) => {
    const {
        name, 
        email, 
        password,
        address
     } = req.body
    console.log('works ' + email);

    // return res.status(400).json(req.body)
    //COnfirm data
    // if(!username || !password || !Array.isArray(roles) || !roles.length){
    //     return res.status(400).json({message: 'All fields are required'})
    // }
    //Check for duplicates
    // const duplicate = await User.findOne({username}).lean().exec()
    // if(duplicate){
    //     return res.status(400).json({message: 'Duplicate username'})
    // }

    // const hashedPwd = await bcrypt.hash(password, 10) //salt rounds
    // const hashedPwd = await bcrypt.hash(password, 10) //salt rounds
    const userObject = {
        'username': name,
        'email': email,
        //use bcypt 
        'password': password,
        'address': address
    }

    //saving data in data folder **temporarily
    console.log('here')
    console.log(req.body)
    console.log(userObject)
    console.log('here')
//  COnfirm data
//name should be username
//samename can be used this way or wot brain 404
    if(!name || !password ){
        return res.status(400).json({message: 'All fields are required'})
    }
    //Check for duplicates ... will see later
    // const duplicate = await User.findOne({name}).lean().exec()
    // if(duplicate){
    //     return res.status(400).json({message: 'Duplicate username'})
    // }

    // const userObject = {username, "password": hashedPwd, roles}
    // //Create and store new user
    const user = await Customer.create(userObject)
    if(user){  //create
        // console.log(userObject)
        return res.json({status: 'ok', user: name})
        res.status(201).json({message: `New User ${name} created`})  
    }else{
        res.status(400).json({message: `Invalid user data received`})  
    }
})

//@desc Placing an Order
//@route Patch /users
//@access Private
const placeOrder = asyncHandler(async(req, res) => {
    const { username, medicineAddress, quantity } = req.body
    //COnfirm data
    if( !username || !medicineAddress ){
        res.status(400).json({message: `All fields are required`})  
    }
    
    const user = await Customer.find({
        'username': username
    })
    console.log('User Email: ' + user[0].email)
    if(!user) {
        return res.status(400).json({message: `User not found`})
        console.log('User Not Found')
    }
    //Update the user order information
    userOrders = user[0].ordersPlaced
    const orderObject = {
        'medicineAddress': medicineAddress,
        'quantity': quantity
    }
    console.log('Earliest Order Product ID: ' + user[0].ordersPlaced[0].medicineAddress)
    userOrders.push(orderObject)
    user[0].ordersPlaced = userOrders

    const updatedUser = await user[0].save()

    res.json({message: `${updatedUser.username} updated`})
})

//@desc Create new users
//@route POST /users
//@access Private
// const createNewUser = asyncHandler(async(req, res) => {
//     const {username, password } = req.body
    
//     //COnfirm data
//     if(!username || !password ){
//         return res.status(400).json({message: 'All fields are required'})
//     }
//     //Check for duplicates
//     const duplicate = await User.findOne({username}).lean().exec()
//     if(duplicate){
//         return res.status(400).json({message: 'Duplicate username'})
//     }

//     const hashedPwd = await bcrypt.hash(password, 10) //salt rounds
//     const userObject = {username, "password": hashedPwd, roles}

//     //Create and store new user
//     const user = await User.create(userObject)
//     if(user){  //create
//         res.status(201).json({message: `New user ${username} created`})  
//     }else{
//         res.status(400).json({message: `Invalid user data received`})  
//     }
// })


// @desc Update a users
// @route PATCH /users
// @access Private
const loginUser = asyncHandler(async(req, res) => {
    const { username, password } = req.body
    const userObject = {
        'username': username,
        //use bcypt 
        'password': password,
    }

    const user = await Customer.findOne({
        'username': username,
        'password': password 
    })
    if(user){
        const token = jwt.sign({
            username: user.username,
            password: user.password
        }, 'secret123')
        return res.json({status: 'ok', user: token})
    }
    else{
        return res.json({status: 'error', user: false})
    }


    //COnfirm data
    // if(!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean'){
    //     res.status(400).json({message: `All fields are required`})  
    // }
    
    // const user = await User.findById(id).exec()
    
    // if(!user) {
    //     return res.status(400).json({message: `User not found`})
    // }
    // //Check for duplicate 
    // const duplicate = await User.findOne({XMLDocument}).lean().exec()
    // //Allow updates to the original user
    // if(duplicate && duplicate?._id.toString() !== id) {
    //     res.status(401).json({message: `Duplicate username`})  
    // }
    // user.username = username
    // user.roles = roles
    // user.active = active
    // if(password){
    //     //Hash password
    //     user.pasword = await bcrypt.hash(password, 10) //salt rounds
    // }

    // const updatedUser = await user.save()

    // res.json({message: `${updatedUser.username} updated`})
})

//@desc Deleta a users
//@route DELETE /users
//@access Private

// const deleteUser = asyncHandler(async(req, res) => {

//     const { id } = req.body
//     if(!id){
//     return res.status(400).json({message: `User ID required`})
//     }
//     const notes = await Note.findOne({ user: id }).lean().exec()
//     if(notes?.length) {
//         return res.status(400).json({message: `User has assinged notes`})
//     }
//     const user = await User.findById(id).exec()
//     if(!user){
//         return res.status(400).json({message: `User not found`})
//     }
//     const result = await deleteOne()
//     const reply = `Username ${result.username} with ID ${result._id} deleted`

//     res.json(reply)
//  })
 
module.exports = {
    // getAllusers,

    createNewUser,
    placeOrder,
    loginUser,
    // updateUser,
    // deleteUser
}