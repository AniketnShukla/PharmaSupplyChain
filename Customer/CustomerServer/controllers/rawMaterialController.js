// const bcrypt  = require('bcrypt')
const fs = require('fs')
const path = require('path')
const asyncHandler = require('express-async-handler')
const Med = require('../models/Med')
const Customer = require('../models/Customer')
const RawMaterial = require('../models/RawMaterial')


//@desc Get all users
//@route Get /users
//@access Private

// const getMeds = asyncHandler(async(req, res) => {
//     const meds = await Med.find().select('-messageAddress').lean()
//     if(!meds) {
//         return res.status(400).json({
//             message: 'No medicines found'
//         })
//     }
//     res.json(meds)
// })

//@desc Create new users
//@route POST /users
//@access Private
const addNewRawMaterial = asyncHandler(async(req, res) => {
    const {
        rawMaterialAddress, 
        description, 
        quantity,
        fromAddresses,
        toAddresses,
        hash,
        previousHash,
        geoPoints,
        timestamps
     } = req.body
    console.log('works' + rawMaterialAddress);

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
    const rawMaterialObject = {
    'rawMaterialAddress': rawMaterialAddress,
    'description': description,
    'quantity': quantity,
    'fromAddresses': fromAddresses,
    'toAddresses': toAddresses,
    'hash': hash,
    'previousHash': previousHash,
    'geoPoints': geoPoints,
    'timestamps': timestamps,
    }

    console.log('__dirname: ' + __dirname)

    // //Create and store new user
    const rawMaterial = await RawMaterial.create(rawMaterialObject)
    if(rawMaterial){  //create
        console.log('Raw Material Address: ' + rawMaterial.rawMaterialAddress)
        console.log(rawMaterial.timeAdded)
        res.status(201).json({message: `New medicine ${rawMaterialAddress} created`})  
    }else{
        res.status(400).json({message: `Invalid material data received`})  
    }
})

//@desc Placing an Order
//@route Patch /users
//@access Private
// const placeOrder = asyncHandler(async(req, res) => {
//     const { username, medicineAddress } = req.body
//     //COnfirm data
//     if( !username || !medicineAddress ){
//         res.status(400).json({message: `All fields are required`})  
//     }
    
//     const user = await Customer.find({
//         'username': username
//     })
//     console.log(user)
//     if(!user) {
//         return res.status(400).json({message: `User not found`})
//         console.log('User Not Found')
//     }
//     //Update the user order information
//     userOrders = user[0].ordersPlaced

//     console.log(user[0].ordersPlaced)
//     userOrders.push(medicineAddress)
//     console.log(userOrders)
//     user[0].ordersPlaced = userOrders

//     const updatedUser = await user[0].save()

//     res.json({message: `${updatedUser.username} updated`})
// })

//@desc Update a users
//@route PATCH /users
//@access Private
// const updateUser = asyncHandler(async(req, res) => {
//     const { id, username, roles, active, password } = req.body
//     //COnfirm data
//     if(!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean'){
//         res.status(400).json({message: `All fields are required`})  
//     }
    
//     const user = await User.findById(id).exec()
    
//     if(!user) {
//         return res.status(400).json({message: `User not found`})
//     }
//     //Check for duplicate 
//     const duplicate = await User.findOne({username}).lean().exec()
//     //Allow updates to the original user
//     if(duplicate && duplicate?._id.toString() !== id) {
//         res.status(401).json({message: `Duplicate username`})  
//     }
//     user.username = username
//     user.roles = roles
//     user.active = active
//     if(password){
//         //Hash password
//         user.pasword = await bcrypt.hash(password, 10) //salt rounds
//     }

//     const updatedUser = await user.save()

//     res.json({message: `${updatedUser.username} updated`})
// })

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
    // getMeds,
    addNewRawMaterial,
    // placeOrder
    // updateUser,
    // deleteUser
}