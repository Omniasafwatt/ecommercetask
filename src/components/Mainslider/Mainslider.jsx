import React from 'react'
import Slider from 'react-slick';
import img1 from "../../assets/images/11.jpg";
import img2 from "../../assets/images/12.jpg";
import img3 from "../../assets/images/22.jpg";
import img4 from "../../assets/images/33.jpg";

export default function Mainslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="container w-50 m-auto my-5 d-flex">
      <Slider className="w-50 " {...settings}>
      <div >
        <img src={img1} className="w-100" alt="" />
      </div>
      <div>
      <img src={img2} className="w-100" alt="" />
      

      </div>
     
    </Slider>
    <div>
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </div>
      </div>
 
      
     
    </>
  );
}
