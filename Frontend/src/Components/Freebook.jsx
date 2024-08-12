import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json"
import Cards from "./Cards";
function Freebook() {
    const Science = list.filter((data) => data.category === "Science");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    const Research = list.filter((data) => data.category === "Journal");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    const News = list.filter((data) => data.category === "News");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
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

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className="font-semibold text-2xl pb-2 underline text-center">Popular Science Magazines</h1>
    <div>
    <Slider {...settings}>
        {Science.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>


        
      </div>
        <div className="py-10">
        <h1 className="font-semibold text-2xl pb-2 underline text-center">Research Journals</h1>
    <div>
    <Slider {...settings}>
        {Research.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>


        
      </div>
        <div>
        <h1 className="font-semibold text-2xl pb-2 underline text-center">News letters</h1>
    <div>
    <Slider {...settings}>
        {News.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>


        
      </div>
    
    </div>
    </>
  );
}

export default Freebook
