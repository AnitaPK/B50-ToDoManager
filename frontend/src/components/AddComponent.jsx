import React, { useState } from "react";
import axios from 'axios'

const AddComponent = () => {
  const [item, setItemName] = useState();
  const [discription, setDiscription] = useState();

 async function handleSubmit(event) {
    event.preventDefault();
    const formData = {itemName:item, itemDiscription:discription};
    const response = await axios.post("http://localhost:7000/addNewItem", formData);
    console.log(response.data);
    alert(response.data.msg);
        
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
    </>
  );
};

export default AddComponent;
