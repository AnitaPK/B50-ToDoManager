import React, { useState, useEffect } from "react";
import axios from 'axios';

const ShowList = () => {
  const [lists, setLists] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:7000/getAllItems");
    console.log(response.data);
    setLists(response.data);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
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
              (
              {lists.map((item, index) => (
                <tr key={index}>
                  <th scope="row">1</th>
                  <td>{item.itemName}</td>
                  <td>{item.itemDiscription}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
              ){" "}
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
