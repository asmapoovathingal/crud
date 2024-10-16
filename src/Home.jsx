import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [data,setData]=useState([])
  const [people,setPeople] =useState("")
  const navigate = useNavigate()
  useEffect(()=>{
  axios.get('http://localhost:3000/users')
  .then(res=>setData(res.data))
  .catch(err=>console.log(err)
  )
  },[])
// console.log(setData);
// const handleDelete =(id)=>{
  // const confirm = window.confirm("would you like to Delete ?")

  // if(confirm){
  //  axios.delete('http://localhost:3000/users'+id)
    
  //   .then(res=>{
  //     location.reload()
  //   }).catch(err=>console.log(err)
  //   )
  // }
// 

const deletePerson = async (id) => {
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  })

  await setData(data.filter(data => data.id !== id))
}



  return (
    <div className='d-flex flex-column justify-content-center text-dark  aliign-items-center  vh-100'>
      <h1 style={{paddingLeft:'450px'}} className='text-align-center mt-5 justify-content-center'>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className='d-flex justify-content-end'><Link to={'/create'} className='btn btn-success'>Add +</Link> </div>
       <table className='table my-5 shadow table-stripped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((data,index)=>(
            <tr key={index}>
             <td>{data.id}</td>
             <td>{data.name}</td>
             <td>{data.email}</td>
             <td>{data.phone}</td>
             <td>
             <Link to={`/read/${data.id}`} className='btn btn-warning me-2'>READ</Link>

              <Link to={`/update/${data.id}`} className='btn btn-success me-2'>Edit</Link>
              <button onClick={e=>deletePerson(data.id)} className='btn btn-danger'>Delete</button>
             </td>
             
            </tr>
          ))
        }
        </tbody>
       </table>
      </div>
      </div>



  )
}

export default Home