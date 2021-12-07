import React from "react";

export default function Table() {
  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Net Price/Rs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Shan Masala</td>
            <td>4</td>
            <td>360</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Dairy Milk</td>
            <td>5</td>
            <td>60</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Coca Cola 1.5Ltr</td>
            <td >2</td>
            <td>220</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
