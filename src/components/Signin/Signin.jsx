import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from"yup"

export default function SignIn() {
    let navigate = useNavigate()


    function senddatatoapi(value){
        axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', value)
        .then(({data})=>{
            console.log(data);
            if(data.message == 'success'){
                localStorage.setItem('token',data.token)
                navigate( '/home')
            }
        }).catch((err)=>{
            console.log(err.response.data.message);
        }

        )
    }
    function validationSchema(){
        let schema = new yup.object({
            email: yup.string().email().required(),
            password: yup.string().matches(/^[A-Z][A-Za-z0-9@]{6,}$/).required(),
        })
        return schema;
    }


    let login= useFormik({
        initialValues:{
            email:'',
            password:'',

        },
        validationSchema,
        onSubmit:(value)=>{    

            senddatatoapi(value)
        

        }
    })
    console.log(login.errors);
  return (
    <>
    <div className="w-75 m-auto mt-5">
        <h2>login Now :</h2>
        <form onSubmit={login.handleSubmit}>

            <label htmlFor='email'>Email :</label>
            <input onBlur={login.handleBlur} onChange={login.handleChange} type="text" name='email'className='form-control mb-3' id='email' />
            {login.errors.email && login.touched.email?<div className="alert alert-danger">{login.errors.email}</div>:'' }


            <label htmlFor='Password'>Password :</label>
            <input onBlur={login.handleBlur} onChange={login.handleChange} type='password' name='password' className='form-control mb-3' id='Password' />
            {login.errors.password && login.touched.password?<div className="alert alert-danger">{login.errors.password}</div>:'' }

            <Link className="fw-bolder  pt-4  text-main cursor-pointer " to="/forgotpassword">Forgot password? </Link>
            <br />


            <button type='submit' className='btn bg-main text-white mt-4'>Sign In</button>
        </form>

    </div>

    </>
  )
}

