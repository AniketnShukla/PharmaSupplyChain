const { default: axios } = require('axios')
const express = require('express')
const asyncHandler = require('express-async-handler')
const fs = require('fs')
const path = require('path')
const router = express.Router()

const handlePost = asyncHandler(async(req, res) => {
    const {medicineAddress, fromAddresses, toAddresses } = req.body
    console.log(req.body)
    medData = req.body;
    console.log('here')
    console.log(__dirname)
    console.log('here')

    fs.writeFile(path.join(__dirname, '../', 'data', 'meds.json'), JSON.stringify(medData), (err) => {
        if (err) throw err;
    })
    // axios.post('http://localhost:3001', {
    //     medData
    // }).then((response) => {
    //         console.log(response.data);
    //         fs.readFile(path.join(__dirname, './data/meds.json'), 'utf-8', (err, readData) => {
    //             if (err) throw err;
    //             readJson = JSON.parse(readData);
    //             // res.render(path.join(__dirname, './views/displayusers.ejs'), { 'data': readJson })
    //         });
    //     }).catch((e) => {
    //     console.log(e);
    // })
    return res.status(400).json(req.body)
})

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})
// router.post('/', (req, res) => {
//     const {medicineAddress, fromAddresses, toAddresses } = req.body
//     console.log(req)

//     return res.status(400).json(req.body)
// })

router.get('/getMedData', (req, res) => {
    console.log('get request @ getmeddata')
    res.sendFile(path.join(__dirname, 'data', 'meds.json'))
})
// router.route('/').post(handlePost)

module.exports = router