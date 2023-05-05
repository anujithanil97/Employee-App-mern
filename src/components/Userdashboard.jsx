import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Header from './Header'
import UserHeader from './UserHeader'

const Userdashboard = props => {
    const apiurl = '/api/ViewallEmployees'
    const[data, changedata]=useState([])
   useEffect(()=>{
    axios.post(apiurl).then(
        (Response)=>{
            console.log(Response.data);
            changedata(Response.data)
        }
    )
       
    
   }
   )
  return (
    <div>
    <UserHeader/>
    <h2 style={{textAlign: 'center', marginTop:'2%'}}>Employee Data</h2>
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Employee Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Location</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (item)=>{
            return <tr>
            <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.location}</td>
              <td>{item.salary}</td>
            </tr>
            
        }
    )}
    
  </tbody>
</table>

    
    </div>
  )
}


Userdashboard.propTypes = {}

export default Userdashboard