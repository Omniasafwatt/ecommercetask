import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Category(item) {
    const [subcategories, setsubcategories] = useState([])

    async function getsubgategories(){
       let {data} =await axios.get('https://ecommerce.routemisr.com/api/v1/categories/6407ea3d5bbc6e43516931df/subcategories')
       setsubcategories(data.data)
       console.log(data.data);
 
    }
    useEffect(()=>{
       getsubgategories()
   },[])
    return(
     <>
     <div className="container mt-5">
       <div className="row g-4">
       <h1 className='text-center text-main'>{subcategories.name}SubCategories</h1>
          {subcategories.map((item)=>{
             return <div className="col-md-4">
             <div className="category border rounded-2">
                 <img src={item.image} className='w-100'height={300} alt="" />
                 <h3 className='text-center my-4 text-main'>{item.name}</h3>
             </div>
     
         </div>
          })
          }
       </div>
     </div>
     </>
    )
}
