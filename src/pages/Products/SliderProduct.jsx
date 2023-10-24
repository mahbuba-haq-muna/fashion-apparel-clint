
import PropTypes from 'prop-types';

import React, { Component } from "react";
import Slider from "react-slick";


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

const SliderProduct = ({ products }) => {
    const { name, brand, type, description, price, rating, photo, _id } = products;
    return (
        <div>

                <Slider {...settings}>
                {products.map((product, index) => (
                            // Render your products here
                            <div key={index}>
                                <img src={product.photo} alt="" />
                            </div>
                        ))}
                </Slider>
        </div>
    );
};
SliderProduct.propTypes = {
    products: PropTypes.array.isRequired,
    
  };

export default SliderProduct;