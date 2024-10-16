import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Create = () => {
  const [values,setValues] = useState({
    name:'',
    email:'',
    phone:''
  })

const navigate = useNavigate()

  const handleSubmit = (event)=>{
     event.preventDefault()
     axios.post('http://localhost:3000/users',values)
     .then(res=>{
      console.log(res)
      navigate('/')
     })
     .catch(err=>console.log(err))
  }

  return (
    <div className="d-flex c0ntainer justify-content-center w-100 align-items-center vh-100 bg-light">
    <div className="row w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1>Add a User</h1>
      <div className="col-lg-12">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
        <label htmlFor="name">Name:</label>
        <input type="text" name='name'className='form-control'placeholder='Enter Name' onChange={e=>setValues({...values, name : e.target.value})} />
        </div>
        <div className="mb-2">
        <label htmlFor="name">Email:</label>
        <input type="email" name='email'className='form-control'placeholder='Enter Your Email' onChange={e=>setValues({...values, email : e.target.value})} />
        </div>
        <div className="mb-3">
        <label htmlFor="name">Phone:</label>
        <input type="text" name='phone'className='form-control'placeholder='Enter Your Phone Number' onChange={e=>setValues({...values, phone : e.target.value})} /> 
        </div>
        <button className="btn btn-success">Submit</button>
        <Link to="/" className="btn btn-primary ms-3" >Back</Link>
      </form> 
      </div>
          </div>
         </div>
    
  )
}

export default Create
