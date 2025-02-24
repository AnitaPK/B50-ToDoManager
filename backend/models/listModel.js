const mongoose = require("mongoose")
const { type } = require("os")

const listSchema = new mongoose.newSchema({
    itemName:{type:String},
    itemDiscription:{type:String},
    createdAt:{type:Date, default:Date.now()}
})

listModel = mongoose.model('list',listSchema )
module.exports =listModel