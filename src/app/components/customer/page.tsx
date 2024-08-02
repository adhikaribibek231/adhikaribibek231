"use client";

import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";

const Customer = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
  });
  const logos = [
    "/clients/Artboard 1@2x.png",
    "/clients/kalinchowk.png",
    "/clients/luxe.png",
    "/clients/mavefund.png",
    "/clients/manjushree.png",
    "/clients/uandme.png",
    // Add more logos here
  ];
  return (
    <>
      <div className="my-16 flex justify-center mx-auto w-full max-w-screen-xl">
        <h1 className="title-font text-3xl mb-3 font-bold text-black">
          Our Valued Clients
        </h1>
      </div>

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="container">
            <Image src={logo} alt="logo" width={150} height={150} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Customer;
