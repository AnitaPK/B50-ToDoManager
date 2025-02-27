import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowList = () => {
  const [lists, setLists] = useState([]);

  let [upadatedName, setupdatedName] = useState();
  let [upadatedDiscri, setupdatedDiscri] = useState();

  const [selectedItem, setSelectedItem] = useState(null);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:7000/getAllItems");
    console.log(response.data);
    setLists(response.data.lists);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(lists);

  async function handleDelete(id) {
    const response = await axios.delete(
      `http://localhost:7000/deleteItem/${id}`
    );
    console.log(response.data);
    if (response.data.success) {
      alert(response.data.msg);
      fetchAPI();
    } else {
      alert(response.data.msg);
    }
  }

async  function handleUpdate(id){
    const updatedFormData = {itemName:upadatedName, itemDiscription:upadatedDiscri}
console.log(updatedFormData);
const response = await axios.put(`http://localhost:7000/updateItem/${id}`, updatedFormData)
if(response.data.success){
  setupdatedName( upadatedName = '')
  setupdatedDiscri(upadatedDiscri = '')
}
  }
 function handleUpdatedEdit(item){
console.log(item);
setSelectedItem(item);      //update code
setupdatedName(item.itemName);
setupdatedDiscri(item.itemDiscription);
 }


  return (
    <>
      <div></div>
      <hr></hr>
      <hr></hr>
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
                <>
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.itemName}</td>
                    <td>{item.itemDiscription}</td>
                    <td>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleUpdatedEdit(item)}
                      >
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item._id)}>
                        Delete
                      </button>
                    </td>

                  <div key={index}
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">
                            Edit Task  {selectedItem?.itemName}
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <input
                            type="text"
                            class="form-control"
                            value={upadatedName}
                            onChange={(e)=>setupdatedName(e.target.value)}
                          />
                          <br></br>
                          <input
                            type="text"
                            class="form-control"
                            value={upadatedDiscri}
                            onChange={(e)=>setupdatedDiscri(e.target.value)}
                          />
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={()=>handleUpdate(item._id)}
                          >
                            Update changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </tr>

                </>
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
