import axios from 'axios'
import React, { useContext } from 'react'
import { useState , useEffect } from 'react'
import Category from '../Category/Category'
import { storecontext } from '../../Context/Context'

export default function Categories() {
   const [categories, setCategories] = useState([])
   const [subcategories, setsubCategories] = useState([])
   const [loading, setloading] = useState(true)
   const [catname, setcatname] = useState([])
   let {getsubgategories}=useContext(storecontext)



   async function getSubCat(id,name){
      let {data} =await getsubgategories(id)
      setsubCategories(data)
      setcatname(name)
      console.log(data);
    }
   async function getgategories(){
      let {data} =await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      setCategories(data.data)
      setloading(false)
      console.log(data.data);

   }
   useEffect(()=>{
      getgategories()
  },[])
   return(
    <>
    <div className="container mt-5">
      <div className="row g-4">
         {categories.map((item)=>{
            return <div className="col-md-4" key={item._id}>
            <div className="category border rounded-2" onClick={() => getSubCat(item._id,item.name)}>
                <img src={item.image} className='w-100'height={300} alt="" />
                <h3 className='text-center my-4 text-main'>{item.name}</h3>
            </div>
    
        </div>
         })
         }
      </div>

{subcategories.length>=1 ?<h2 className='text-main text-center my-5'>{catname} Subcategories</h2>:''}
      <div className="row g-4">
         {subcategories.map((x)=>{
            return  <div className="col-md-4" key={x._id}>
            <div className="category border rounded-2">
                <h3 className='text-center my-4'>{x.name}</h3>
            </div>    
        </div>
         })
         }
      </div>
    </div>
    </>
   )
}
