import React from "react";
import CardCategories from "./CardsCategories";
export default function Categories() {
  return (
      <div className="container" style={{ backgroundColor: "#075ead" }}>
        <div className="row d-flex justify-content-around">
          <CardCategories title="Grocery"/>
          <CardCategories title="Grocery"/>
          <CardCategories title="Grocery"/>
        </div>
        <div className="row d-flex justify-content-around">
          <CardCategories title="Grocery"/>
          <CardCategories title="Grocery"/>
          <CardCategories title="Grocery"/>
        </div>
      </div>
  );
}
