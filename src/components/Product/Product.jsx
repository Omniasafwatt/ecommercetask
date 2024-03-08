import React, { useContext,useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { storecontext } from '../../Context/Context'
import { date } from 'yup'
import { toast } from 'react-toastify'

export default function Product({item}) {
    let {counter,setCounter,addtocart,addtowishlist}=useContext(storecontext)
    const [loading, setLoading] = useState(true)
    const [heart,setheart] = useState("black")


    useEffect(()=>{

    },[heart])
    async function addproducttocart(productId){
      setLoading(false)
      let data =await addtocart(productId)
      console.log(data);
      setCounter(data.numOfCartItems)

    if( data.status =='success'){
      toast.success('product added successfully')
      setLoading(true)
      // setCounter(data.numOfCartItems)

    }
  }
  async function addproducttowishlist(productId){
    // setLoading(false)
    let data =await addtowishlist(productId)
    console.log(data);


    // setCounter(data.numOfCartItems)

  if( data.status =='success'){
    toast.success('product added successfully')
    // setLoading(true)
    setheart("red")
    console.log(heart);
    // setCounter(data.numOfCartItems)

  }
}

  return (
    <>
    <div className="col-md-3 liink">
            <div className="product cursor-pointer rounded-3 p-3">
             <Link to={'/productdetails/'+item._id}>
             <img src={item.imageCover} className='w-100' alt="" />
              <span className='text-main'>{item.category.name}</span>
              <h5 className='my-2 fw-bold'>{item.title.split(' ').slice(0,2).join(" ")}</h5>
              <div className='d-flex justify-content-between my-3 text-dark'>
                <div>
                  {item.price} EGP
                </div>
                <div>
                <i className="fa-solid fa-star rating-color"></i>
                  {item.ratingsAverage}
                </div>
              </div>
             </Link>
             <h2 style={{color:heart}} className='d-flex justify-content-end align-content-end align-item-end' onClick={()=>(addproducttowishlist(item._id))}><i className="fa-solid fa-heart " ></i></h2>
              <button disabled={!loading} onClick={()=>(addproducttocart(item._id))} className='bg-main text-white w-100 btn text-center'>
                {loading?'Add To Cart':'Loading...'}
                </button>
            </div>
          
          </div>

    </>
  )
}
