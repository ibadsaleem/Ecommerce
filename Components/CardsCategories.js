import React from "react";
import Image from "next/image";

export default function CardCategories(props) {
  return (
    <div className="card text-dark" style={{ width: "18rem" , marginTop:20,backgroundColor:'#075ead',border:0}}>
      <img className="card-img-top rounded-circle" src="https://source.unsplash.com/1600x900/?store,grocery" alt="Card image cap" />
      <div className="card-body" style={{textAlign:'center'}}>
        <a href="#" className="btn btn-primary" style={{textTransform:'uppercase'}}>
          {props.title}
        </a>
      </div>
    </div>
  );
}
