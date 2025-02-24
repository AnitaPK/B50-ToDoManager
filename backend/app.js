const express = require('express')
const cors = require('cors')
const listRouter = require('./routes/listRoutes')


const app = express();
port = 7000

app.use(express.json())
app.use(cors())

// app.get('/',(req, res)=>{
//     res.send('Server is started im on the browser....')
// })

app.use('/', listRouter)

const configDB = require('./config/db')

configDB();


app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)
})


// http://localhost:7000