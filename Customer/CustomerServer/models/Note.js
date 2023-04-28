// const { default: getWeekOfMonthWithOptions } = require('date-fns/esm/fp/getWeekOfMonthWithOptions/index.js')
// const { default: parseISOWithOptions } = require('date-fns/esm/fp/parseISOWithOptions/index.js')
// const mongoose = require('mongoose')

// const AutoIncrement = require('mongoose-sequence')(mongoose)

// const noteSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'User'
//     },
//     title: {
//         type: String,
//         required: true
//     },
//     text: {
//         type: String,
//         default: "Employee",
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
//     },
//     {
//         timestamps: true
//     }
// )

// noteSchema.plugin(AutoIncrement, {
//     inc_field: 'ticket',
//     id: 'ticketNums',
//     start_seq: 500
// })

// module.exports = mongoose.model('Note', noteSchema)
