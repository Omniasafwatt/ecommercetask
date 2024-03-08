import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Mainslider from '../Mainslider/Mainslider';
import Products from '../Products/Products';

export default function Home() {
  const [category, setCategory] = useState([])

  async function getcategories(){
  
      let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      setCategory(data.data)
  
      console.log(data.data);
  
  
  }
  useEffect(()=>{
      getcategories()
  },[])
  
  var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: false,
      // autoplaySpeed: 1500
    };
  
  return (
  <>
  <Mainslider />
  <Slider {...settings}>
    {category.map((item)=>(
      <img src={item.image} height='300' width='200' alt="" />
    ))
    }
  </Slider>
  <Products/>
  </>


  )
}
