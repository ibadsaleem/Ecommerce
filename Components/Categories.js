import React from "react";
import CardCategories from "./CardsCategories";
export default function Categories() {
  return (
      <div className="" style={{ backgroundColor: "#075ead" ,padding:0}}>
        <div className="row d-flex justify-content-around">
          <CardCategories title="Grocery Items" href="/categories/Grocery"/>
          <CardCategories title="Electronics Items" href="/categories/Electronics"/>
          <CardCategories title="Toys Products" href="/categories/Toys"/>
        </div>
        <div className="row d-flex justify-content-around">
          <CardCategories title="Clothing Items" href="/categories/Clothing"/>
          <CardCategories title="Fresh Items" href="/categories/Fresh"/>
          <CardCategories title="Accessories Items" href="/categories/Accessories"/>
        </div>
      </div>
  );
}
