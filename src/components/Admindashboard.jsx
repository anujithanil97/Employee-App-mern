import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './Header'
const Admindashboard = () => {
 
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
        axios.delete('/api/deleteEmployee/'+id)
        window.location.reload()
      
        
      } catch (error) {
        console.log(error);
      }
          }
 
   return (
    <div>
     <Header/>
     <h3 style={{textAlign: 'center', marginTop:'2%'}}>Employee Data</h3>
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
                <Link to ={`/updateEmployee/${item._id}`} className='btn btn-primary' style={{ width: '100px', marginLeft: '10px',marginTop:1, marginBottom:1 }}>Update</Link>
              
              {/* <button onClick={()=> navigate(`/editform/${item._id}`)} >Update</button> */}
             
              {/* <button onClick={ e => deletebtn(item._id)} className='btn btn-primary' style={{ width: '100px', marginLeft: '10px', marginTop:1, marginBottom:1 }} >Delete</button> */}
              <Link to ={''} onClick={ e => deletebtn(item._id)} className='btn btn-primary' style={{ width: '100px', marginLeft: '10px',marginTop:1, marginBottom:1 }}>Delete</Link>              </td>
            </tr>
            
        }
    )}
    
  </tbody>
</table>

    
    </div>
  )
}


export default Admindashboard