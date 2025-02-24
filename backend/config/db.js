const mongoose = require('mongoose')
require('dotenv').config()



async function configDB(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('database connected')
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = configDB