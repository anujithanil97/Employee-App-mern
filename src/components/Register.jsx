import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const apiurl = '/api/register'
    const [input,setInput]=useState([])

    const changeinput=(event)=>{
        setInput({
            ...input,[event.target.name]:event.target.value,
        })
    }
const buttonclick=()=>{
    console.log(input);
    axios.post(apiurl,input).then(
        (Response)=>{
            console.log(Response.data);
            
            if (Response.data.status=="success"){
                alert("Successfully signed up")
            }
        }
    )
}

  return (
    
<div className='background-image'>       
<div className="container" style={{marginTop:"5%"}}>

    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className='heading'>Sign up</h2>
            <p className='section'>to continue</p>
            <label htmlFor="" className="form-label">Full Name</label>
            <input name ="fullname" type="text" className="form-control" onChange={changeinput} />
            <label htmlFor="" className="form-label">Email</label>
            <input name ="email" type="email" className="form-control"  onChange={changeinput}/>
            <label htmlFor="" className="form-label">Job Title</label>
            <input name ="jobtitle" type="text" className="form-control" onChange={changeinput} />
            <label htmlFor="" className="form-label">Username</label>
            <input name ="username" type="text" className="form-control" onChange={changeinput} />
            <label htmlFor="" className="form-label">Password</label>
            <input name ="password" type="password" className="form-control"  onChange={changeinput}/>
            <button class="btn btn-primary" type="submit" onClick={buttonclick}>Sign up</button>
            {/* <p className='linktosignin'>Already have an account? <a href="">Sign in</a></p> */}
            <Link to = '/login-user' className='linktosignin' style={{textDecoration:'none'}}>Already have an account? Log in</Link>

       
            </div> 
    </div>
</div>

    </div>
  )
}

export default Register