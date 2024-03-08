import React, { useContext, useEffect, useState } from 'react'
import { storecontext } from '../../Context/Context'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function Cart() {

  let {getcart,deleteitem,setCounter,updateQTY}=useContext(storecontext)
  let [data,setData]=useState(null)

  useEffect(()=>{
    (async()=>{
      let data=await getcart()

      if(data?.response?.data.statusMsg =='fail'){
        setData(null)
      }else{
      setData(data)

      }

      console.log(data);
    })()

  },[])


  async function deleteproduct(id){
    let data =await deleteitem(id)
    console.log(data);
    if(data.status =='success' ){
      toast.error('product deleted successfully')
      setCounter(data.numOfCartItems)
      setData(data)
    }

  }
  async function updateproductqty(id,count){
    let data =await updateQTY(id,count)
    console.log(data);
    if(data.status =='success' ){
      toast.success('product updated successfully')
      setCounter(data.numOfCartItems)
      setData(data)
    }
  }

  if(data == null || data.numOfCartItems == 0)return <h2 className='text-center my-5 text-main'>No items in cart </h2>
  return (
    <div className='container bg-main-light my-2'>
      <h2>Shop Cart:</h2>
      <p className='text-main'>Total cart price: {data?.data?.totalCartPrice} EGP</p>
      {data?.data?.products.map(item=>{
        return <div key={item._id} className="row py-2 border-bottom">
        <div className="col-md-1">
          <img src={item.product.imageCover}  className='w-100' alt="" />
        </div>
        <div className="col-md-11 d-flex justify-content-between">
          <div>
            <p className='my-1'>{item.product.title}</p>
            <p className='text-main m-0 p-0'>price: {item.price}</p>
            <button onClick={()=>deleteproduct(item.product._id)} className='btn m-0 px-0'><i className="fa-solid fa-trash-can text-main"></i>Remove</button>
          </div>
          <div>
            <button onClick={()=>updateproductqty(item.product._id,item.count + 1)} className='brdr'>+</button>
            <span className='mx-2'>{item.count}</span>
            <button disabled={item.count<=1} onClick={()=>updateproductqty(item.product._id,item.count - 1)} className='brdr'>-</button>
          </div>
        </div>
      </div>
      })}

<Link to={`/address/${data.data._id}`} className='btn bg-main text-white my-5'>place order</Link>
    </div>
  )
}
