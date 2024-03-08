import axios from "axios";
import { createContext, useState} from "react";

 export let storecontext =createContext(0)

 function addtocart(productId){
    return axios.post('https://ecommerce.routemisr.com/api/v1/cart',{productId},{
        headers:{
            token: localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
 }
 async function addtowishlist(productId){
    return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{productId},{
        headers:{
            token: localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
 }
 function getcart(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
        headers:{
            token: localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
 }
 function getwishlist(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
        headers:{
            token: localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
 }
 function deleteitem(productId){
    return axios.delete('https://ecommerce.routemisr.com/api/v1/cart/'+ productId,{
        headers:{
            token: localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
 }
 function deleteitemfromwishlist(productId){
    return axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/'+ productId,{
        headers:{
            token: localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
 }
 function updateQTY(productId , count){
    return axios.put('https://ecommerce.routemisr.com/api/v1/cart/'+ productId,{count},{
        headers:{
            token: localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
 }
 async function pay(cartId , shippingAddress){
    return axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/'+cartId,{shippingAddress},{
        headers:{
            token: localStorage.getItem('token')
        }
    }).then(({data})=>data).catch(err=>err)
 }

 async function getsubgategories(catId){
   return axios.get('https://ecommerce.routemisr.com/api/v1/categories/'+catId+'/subcategories').then(({data})=>data).catch(err=>err)
  }
 export default function Storecontextprovider({children}){
    const [counter, setCounter] = useState(0)
    return <storecontext.Provider value={{counter,setCounter,addtocart,getcart,deleteitem,updateQTY,pay,getsubgategories,addtowishlist,getwishlist,deleteitemfromwishlist}}>

{children}
    </storecontext.Provider>

}