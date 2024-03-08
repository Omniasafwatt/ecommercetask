import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Product from '../Product/Product'
import { useQuery } from 'react-query'

export default function Products() {
  const [search, setSearch] = useState('')
console.log(search);

  function getproducts(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  let {data , isError, isFetching,isLoading}=useQuery('getproducts',getproducts)
  console.log(data?.data.data);
//   const [products, setProduts] = useState([])
//  async function getproducts(){

//   let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products')
//   console.log(data.data);
//   setProduts(data.data)

// }
// useEffect(()=>{
//   getproducts()
// },[])

  return (
    <>
    <div className="container">
    <input onKeyUp={(e)=>setSearch(e.target.value)} className='my-5 w-75 mx-auto form-control' type="text" placeholder="Search..." height='70'/>
      <div className="row">
        {data?.data.data.filter((item) => {
          return search.toLowerCase() === ''? item : item.title.toLowerCase().includes(search)
        }).map((item)=>{
          return <Product item={item}  key={item.id}/>
        })

        }
      </div>
    </div>

    </>
  )
 }
