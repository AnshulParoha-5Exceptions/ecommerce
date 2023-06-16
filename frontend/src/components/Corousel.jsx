// Corousel.jsx
import React from 'react';
import firstImage from '../images/1.png';
import secondImage from '../images/2.jfif';
import thirdImage from '../images/3.png';


const Carousel = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000" // Set the interval to 3 seconds (3000 milliseconds)
      >
        <style>
          {`.carousel-control-prev-icon,.carousel-control-next-icon {background-color: black;}`}
        </style>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={firstImage}
              className="d-block w-100 carousel-image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-dark">Iphone 12</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={secondImage}
              className="d-block w-100 carousel-image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-dark">Iphone 13</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={thirdImage}
              className="d-block w-100 carousel-image"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-dark">Iphone 14</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
