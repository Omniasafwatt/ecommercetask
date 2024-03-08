import axios from 'axios';
import React, { useContext, useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import { storecontext } from '../../Context/Context';
import { toast } from 'react-toastify';

export default function Productdetails() {

    let x = useParams()
    console.log(x);
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)


    async function getproductdetails(){
        let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
        setProduct(data.data)
    }
    useEffect(()=>{
        getproductdetails()
    },[])

    let {counter,setCounter,addtocart}=useContext(storecontext)

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
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <img src={product.imageCover} className='w-100' alt="" />
            </div>
            <div className="col-md-9 my-4">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                {/* <span>{product.category.name}</span> */}
                <div className='d-flex justify-content-between my-4' >
                    <div>
                        <p>{product.price} EGP </p>
                    </div>
                    <div>
                        <i className="fa-solid fa-star rating-color"></i>
                        {product.ratingsAverage}
                    </div>
                </div>
                <button onClick={()=>addproducttocart(product._id)} className='bg-main text-white w-100 btn text-center'>Add To Cart</button>

            </div>
        </div>
    </div>

    </>
  )
}
