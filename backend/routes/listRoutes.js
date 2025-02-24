const express = require('express')
const listControllers = require('../controllers/listControllers')


const router = express.Router()

router.get('/getAllItems', listControllers.getAllItems)


router.post('/addNewItem', listControllers.addNewItem)

router.put('/updateItem/:ID', listControllers.updateItem)


router.delete('/deleteItem/:ID', listControllers.deleteItem)


module.exports = router;

// http://localhost:7000/getAllItems 

// http://localhost:7000/addNewItem 

// http://localhost:7000/updateItem/erty345dfgh567rt  req.params.ID

// http://localhost:7000/deleteItem/fghj4567ertyufgh567  req.params.ID



