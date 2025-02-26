
const List = require('../models/listModel')

async function getAllItems(req, res){ 
    try {
        const lists = await List.find()
        console.log(lists)
        res.status(200).send({msg:'send all data', success:true, lists:lists})
            
        } catch (error) {
            res.status(500).send({msg:'server error',error:error})
        }
}

async function addNewItem(req,res){

    console.log(req.body)

    try {
        const newTask = new List(req.body)
        await newTask.save();

    res.status(200).send({msg:'Item saved successfully', success:true})
        
    } catch (error) {
        res.status(500).send({msg:'server error',error:error})
    }

}


function updateItem(req,res){

}

async function deleteItem(req,res){
    id= req.params.ID
    console.log(id)
    try {
    const result = await List.findByIdAndDelete(id)
    if (!result) return res.status(404).send({ msg: 'task not found', success:false });

    res.status(200).send({msg:"Task deleted Successfully...", success:true})
    } catch (error) {
        res.status(500).send({msg:'server error',error:error})
        
    }
}


module.exports = {
    getAllItems,
    addNewItem,
    updateItem,
    deleteItem
}