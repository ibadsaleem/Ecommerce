import React from "react";
import Image from "next/image";

export default function Cards() {
  return (
    <div className="card text-dark bg-light" style={{ width: "18rem" , marginTop:20}}>
      <img className="card-img-top" src="https://source.unsplash.com/1600x900/?store,grocery" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </p>
        <a href="#" className="btn btn-primary">
          Add to Cart 🛒
        </a>
      </div>
    </div>
  );
}
