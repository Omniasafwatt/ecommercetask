import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { storecontext } from '../../Context/Context'

export default function Address() {
    let {id}=useParams()
    console.log(id);

    let {pay}=useContext(storecontext)



    async function senddatatoapi(value){
       let data = await pay(id,value)
       console.log(data);
       if(data.status=='success'){
        window.location.href=data.session.url
       }
    }


    let address= useFormik({
        initialValues:{
            details:'',
            phone:'',
            city:''

        },
        onSubmit:(value)=>{ 
            console.log(value);   

            senddatatoapi(value)
        

        }
    })
    console.log(address.errors);
  return (
    <>
    <div className="w-75 m-auto mt-5">
        <h2>address Now :</h2>
        <form onSubmit={address.handleSubmit}>

            <label htmlFor='details'>details :</label>
            <textarea onBlur={address.handleBlur} onChange={address.handleChange} type="text" name='details'className='form-control mb-3' id='details' />


            <label htmlFor='phone'>phone :</label>
            <input onBlur={address.handleBlur} onChange={address.handleChange} type='text' name='phone' className='form-control mb-3' id='phone' />

            <label htmlFor='city'>city :</label>
            <input onBlur={address.handleBlur} onChange={address.handleChange} type='text' name='city' className='form-control mb-3' id='city' />



            <button type='submit' className='btn bg-main text-white'>pay</button>
        </form>

    </div>

    </>
  )
}

