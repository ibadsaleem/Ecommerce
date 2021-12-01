import React from "react";
import Image from "next/image";
export default function Carousel() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{marginTop:120}}>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval={10000}>
        <img src='/Images/image.jpg' className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval={2000}>
        <img src="/Images/image2.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/Images/image3.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/Images/image4.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/Images/image5.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}
