import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'

const EmployeeForm = () => {
    const apiurl = '/api/empdataEntry'
  const[input, setInput]=useState([])
  const changeInput=(event)=>{
    setInput({
      ...input,[event.target.name]:event.target.value
    })
  }

const buttonclick=()=>{
console.log(input);
axios.post(apiurl,input).then(
  (Response)=>{
    console.log(Response.data);

if (Response.data.status=="success"){
  alert("Employee added successfully")
}

  }
)
  }
  return (
    <div>
    <Header/>
   
    <div className="mycontainer">
            <div className="row g-3">
                <br />
                <br />
               
                <h2 className='formheading'>Employee Form</h2>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Employee Name</label>
                    <input type="text" name='name' className="form-control" onChange={changeInput} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Designation</label>
                    <input type="text" name='designation' className="form-control" onChange={changeInput} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Location</label>
                    <input type="text" name='location' className="form-control" onChange={changeInput} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Salary</label>
                    <input type="text" name='salary' className="form-control"onChange={changeInput} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <button type='submit' className='btn btn-primary' onClick={buttonclick}>Add</button>
                </div>
            </div>
        </div>
   
   </div>
  )
}

export default EmployeeForm