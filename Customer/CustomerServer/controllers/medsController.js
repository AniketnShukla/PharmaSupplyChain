// const bcrypt  = require('bcrypt')
const fs = require('fs')
const path = require('path')
const asyncHandler = require('express-async-handler')
const Med = require('../models/Med')
const Customer = require('../models/Customer')


//@desc Get all users
//@route Get /users
//@access Private

const getMeds = asyncHandler(async(req, res) => {
    const meds = await Med.find().select('-messageAddress').lean()
    console.log(meds)
    if(!meds) {
        return res.status(400).json({
            message: 'No medicines found'
        })
    }
    res.json(meds)
})

//@desc Create new users
//@route POST /users
//@access Private
const addNewMed = asyncHandler(async(req, res) => {
    const {medicineAddress, 
        description, 
        quantity,
        price,
        rawMaterialAddress,
        fromAddresses,
        toAddresses,
        hash,
        previousHash,
        geoPoints,
        timestamps
     } = req.body
    console.log('works' + medicineAddress);

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
    const medObject = {
    'medicineAddress': medicineAddress,
    'description': description,
    'quantity': quantity,
    'price': price,
    'rawMaterialAddress': rawMaterialAddress,
    'fromAddresses': fromAddresses,
    'toAddresses': toAddresses,
    'hash': hash,
    'previousHash': previousHash,
    'geoPoints': geoPoints,
    'timestamps': timestamps,
    }

    //saving data in data folder **temporarily
    console.log('here')
    console.log(__dirname)
    console.log('here')
//     fs.readFile(path.join(__dirname, '../', 'data', 'meds.json'), 'utf-8', (err, readData) => {
//         if (err) throw err;
//         readJsonArray = JSON.parse(readData);
//         readJsonArray.push(medObject);
//         console.log(readJsonArray);
//     fs.writeFile(path.join(__dirname, '../', 'data', 'meds.json'), JSON.stringify(medObject), (err) => {
//         if (err) throw err;
//     })
// })
    // //Create and store new user
    const med = await Med.create(medObject)
    if(med){  //create
        console.log(med)
        res.status(201).json({message: `New medicine ${medicineAddress} created`})  
    }else{
        res.status(400).json({message: `Invalid medicine data received`})  
    }
})


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
    getMeds,
    addNewMed,
    // updateUser,
    // deleteUser
}