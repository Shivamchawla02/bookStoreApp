import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import banner from "/Banner.png";
import csir from "/CSIR.png";

function Banner() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000 ,
    autoplay: true
  };

  return (
    <>
      <div>
        <img className="max-w-screen-2xl hidden md:block mx-auto md:px-20 px-4 mt-10 pt-10"
        src={csir}
         alt="" />
      </div>

      <div className="max-w-screen-2xl justify-center mx-auto md:px-20 px-4 my-10 py-5">
      <Slider {...settings}>
      <div>
        <h3><img src="http://192.168.2.13:8069/web/image/1190-73ac0948/slider-2022-12-13-2.png" alt="" /></h3>
      </div>
      <div>
        <h3><img src="http://192.168.2.13:8069/web/image/1191-04d7576e/slider-2022-12-13-3.png" alt="" /></h3>
      </div>
      <div>
        <h3><img src="http://192.168.2.13:8069/web/image/1199-6ee6039c/slider-2022-12-13-1.png" alt="" /></h3>
      </div>
      <div>
        <h3><img src="http://192.168.2.13:8069/web/image/423-0646e9bb/pm.png" alt="" /></h3>
      </div>
      <div>
        <h3><img src="http://192.168.2.13:8069/web/image/424-db4b7aa9/minister.png" alt="" /></h3>
      </div>
      <div>
        <h3><img src="http://192.168.2.13:8069/web/image/425-66671c35/dg.png" alt="" /></h3>
      </div>
      <div>
        <h3><img src="http://192.168.2.13:8069/web/image/426-057e8e29/kirti-award-3.png" alt="" /></h3>
      </div>
      <div>
        <h3><img src="http://192.168.2.13:8069/web/image/427-f651456d/kirti-award-2%20%281%29.png" alt="" /></h3>
      </div>
    </Slider>
      </div>


    </>
  );
}

export default Banner;