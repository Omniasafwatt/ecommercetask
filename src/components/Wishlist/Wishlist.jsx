import React, { useContext, useEffect, useState } from 'react'
import { storecontext } from '../../Context/Context'
import { toast } from 'react-toastify'

export default function Wishlist() {
  let {getwishlist,deleteitemfromwishlist,setCounter,addtocart}=useContext(storecontext)
  let [data,setData]=useState(null)


  async function getdata(){
    let data=await getwishlist()

      if(data?.response?.data?.statusMsg =='fail'){
        setData(null)
      }else{
      setData(data)

      }

      console.log(data);

  }
  useEffect(()=>{
    getdata();
  },[])
  async function addproducttocart(productId){
    let data =await addtocart(productId)
    console.log(data);
    setCounter(data.numOfCartItems)

  if( data.status =='success'){
    toast.success('product added successfully')
 deleteitem(productId)
    // setCounter(data.numOfCartItems)

  }
}


  async function deleteitem(productId){
    let data =await deleteitemfromwishlist(productId)
    console.log(data);
    if(data.status =='success' ){
      // toast.error('product deleted successfully')
      setData(data)
      getdata()
    }
  }

//   // }
//   // async function updateproductqty(id,count){
//   //   let data =await updateQTY(id,count)
//   //   console.log(data);
//   //   if(data.status =='success' ){
//   //     toast.success('product updated successfully')
//   //     setCounter(data.numOfCartItems)
//   //     setData(data)
//   //   }
//   // }

//   if(data == null || data.numOfCartItems == 0)return <h2 className='text-center my-5 text-main'>No items in cart </h2>
  return (
    <div className='container bg-main-light my-2'>
      <h2>My Wish list:</h2>
      {data?.data?.map(item=>{
        return <div key={item._id} className="row py-2 border-bottom">
        <div className="col-md-1">
          <img src={item.imageCover}  className='w-100' alt="" />
        </div>
        <div className="col-md-11 d-flex justify-content-between">
          <div>
            <p className='my-1'>{item.title}</p>
            <p className='text-main m-0 p-0'>price: {item.price}</p>
            <button className='btn m-0 px-0' onClick={()=>deleteitem(item._id)}><i className="fa-solid fa-trash-can text-main"></i>Remove</button>
          </div>
          <div>
            <button  onClick={()=>(addproducttocart(item._id))} className='brdr'>Add to cart</button>
          </div>
        </div>
      </div>
      })}
    </div>
  )
}