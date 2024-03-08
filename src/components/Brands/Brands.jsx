import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { date } from 'yup';

export default function Brands() {
  const [brand, setbrand] = useState([])
  const [brandname, setbrandname] = useState([])
  const [loading, setloading] = useState(true)

  async function getbrand(id){
    let {data} =await axios.get('https://ecommerce.routemisr.com/api/v1/brands/'+id)
    setbrandname(data.data)
    console.log(data.data);
  }

  async function getbrands(){
     let {data} =await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
     setbrand(data.data)
     setloading(false)
     console.log(data.data);

  }

  useEffect(()=>{
     getbrands()
 },[])

  return(
   <>
   
   {!loading?'':<span className="loader"></span>}
   <div className="container mt-5">
     <div className="row g-4">
      <h1 className='text-center text-main'>All Brands</h1>
        {brand.map((item)=>{
           return <div className="col-md-3" key={item._id}>
           <div className="category border rounded-2" onClick={()=>getbrand(item._id)}>
<div>
  {/* Button trigger modal */}
  <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <img src={item.image} className='w-100'height={200} alt="" />
               <h6 className='text-center my-4'>{item.name}</h6>
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body d-flex justify-content-between">
          <div className="text">
          <h2 className='text-main'>{brandname.name}</h2>
          <p>{brandname.name}</p>
          </div>
          <div className="sora">
            <img src={brandname.image} alt="" className='w-100 h-100' />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

               
           </div>
   
       </div>
        })
        }
     </div>
   </div>
   </>
  )
}
