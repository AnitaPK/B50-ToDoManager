function getAllItems(req, res){ 
    try {
        res.status(200).send({msg:'send all data', success:true})
            
        } catch (error) {
            res.status(500).send({msg:'server error',error:error})
        }
}

function addNewItem(req,res){

    console.log(req.body)

    try {
    res.status(200).send({msg:'Item saved successfully', success:true})
        
    } catch (error) {
        res.status(500).send({msg:'server error',error:error})
    }

}


function updateItem(req,res){

}

function deleteItem(req,res){

}


module.exports = {
    getAllItems,
    addNewItem,
    updateItem,
    deleteItem
}