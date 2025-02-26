import React, { useState, useEffect } from "react";
import axios from 'axios';

const ShowList = () => {
  const [lists, setLists] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:7000/getAllItems");
    console.log(response.data);
    setLists(response.data.lists);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(lists);


  const [item, setItemName] = useState();
  const [discription, setDiscription] = useState();

 async function handleSubmit(event) {
    event.preventDefault();
    const formData = {itemName:item, itemDiscription:discription};
    const response = await axios.post("http://localhost:7000/addNewItem", formData);
    console.log(response.data);
    alert(response.data.msg);
    fetchAPI();
  }

async function handleDelete(id){
    const response = await axios.delete(`http://localhost:7000/deleteItem/${id}`)
    console.log(response.data)
    if(response.data.success){
      alert(response.data.msg)
      fetchAPI();
    }else{
      alert(response.data.msg)
    }
}

  return (
    <>

<div>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="taskName" class="form-label">
              Task Name
            </label>
            <input type="text" class="form-control" id="taskName"  onChange={(e)=>setItemName(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="taskDisri" class="form-label">
              Task discription
            </label>
            <input type="text" class="form-control" id="taskDisri" onChange={(e)=>setDiscription(e.target.value)}/>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <hr></hr><hr></hr>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task Name</th>
            <th scope="col">Discription</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {lists.length > 0 ? (
            <>
              
              {lists.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.itemName}</td>
                  <td>{item.itemDiscription}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={()=>handleDelete(item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              
            </>
          ) : (
            <p>NO Data</p>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ShowList;
