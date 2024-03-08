import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from"yup"

export default function Signup() {
    let navigate = useNavigate()


    function senddatatoapi(value){
        axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', value)
        .then(({data})=>{
            console.log(data);
            if(data.message == 'success'){
                navigate( '/signin')
            }
        }).catch((err)=>{
            console.log(err.response.data.message);
        }

        )
    }
    function validationSchema(){
        let schema = new yup.object({
            name: yup.string().min(2).required(), 
            email: yup.string().email().required(),
            password: yup.string().matches(/^[A-Z][A-Za-z0-9@]{6,}$/).required(),
            rePassword: yup.string().oneOf([yup.ref('password')]).required()
        })
        return schema;
    }


    let register= useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            rePassword:'',
        },
        validationSchema,
        onSubmit:(value)=>{    

            senddatatoapi(value)
        

        }
    })
    console.log(register.errors);
  return (
    <>
    <div className="w-75 m-auto mt-5">
        <h2>Register Now :</h2>
        <form onSubmit={register.handleSubmit}>
            <label htmlFor='name'>Name :</label>
            <input onBlur={register.handleBlur} onChange={register.handleChange} type="text" name='name' className='form-control mb-3' id='name' />
            {register.errors.name && register.touched.name?<div className="alert alert-danger">{register.errors.name}</div>:'' }

            <label htmlFor='email'>Email :</label>
            <input onBlur={register.handleBlur} onChange={register.handleChange} type="text" name='email'className='form-control mb-3' id='email' />
            {register.errors.email && register.touched.email?<div className="alert alert-danger">{register.errors.email}</div>:'' }


            <label htmlFor='Password'>Password :</label>
            <input onBlur={register.handleBlur} onChange={register.handleChange} type='password' name='password' className='form-control mb-3' id='Password' />
            {register.errors.password && register.touched.password?<div className="alert alert-danger">{register.errors.password}</div>:'' }


            <label htmlFor='rePassword'>rePassword :</label>
            <input onBlur={register.handleBlur} onChange={register.handleChange} type='password' name='rePassword'className='form-control mb-3' id='rePassword' />
            {register.errors.rePassword && register.touched.rePassword?<div className="alert alert-danger">{register.errors.rePassword}</div>:'' }


            <button type='submit' className='btn bg-main text-white'>Sign Up</button>
        </form>

    </div>

    </>
  )
}
