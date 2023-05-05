import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const TDashboard = () => {
    const apiurl = '/api/ViewallEmployees'
    const[data, changedata]=useState([])
const navigate=useNavigate()
    

   useEffect(()=>{
    axios.post(apiurl).then(
        (Response)=>{
            console.log(Response.data);
            changedata(Response.data)
        })
    },[])  
    
    
    const deletebtn=async(id)=>{
try {
  axios.delete('http://localhost:3001/deleteEmployee/'+id)
  window.location.reload()

  
} catch (error) {
  console.log(error);
}
    }
 
   return (
    <div>
    
    
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Employee Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Location</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (item)=>{
            return <tr key={item._id}>
            <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.location}</td>
              <td>{item.salary}</td>
              <td>
                <Link to ={`/updateEmployee/${item._id}`} className='btn btn-primary' style={{ width: '100px', marginTop:0, marginBottom:0 }}>Update</Link>
              
              {/* <button onClick={()=> navigate(`/editform/${item._id}`)} >Update</button> */}
             
              <button onClick={ e => deletebtn(item._id)} className='btn btn-primary' style={{ width: '100px', marginLeft: '20px', marginTop:0, marginBottom:0 }} >Delete</button>

              </td>
            </tr>
            
        }
    )}
    
  </tbody>
</table>

    
    </div>
  )
}
export default TDashboard