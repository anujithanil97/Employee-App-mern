import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LoginUser = () => {
const navigate=useNavigate()
const apiurl="/api/login-user"
const [input,setInput]=useState([])
const changeinput=(event)=>{
    setInput({
        ...input,[event.target.name]:event.target.value
    })
}
    const btnclick=()=>{
        axios.post(apiurl,input).then(
            (Response)=>{
                console.log(Response.data.status);
                if (Response.data.status=="Login Successful"){
                    navigate('/user-dashboard')
                    
                } else {
                    alert ("Invalid credentials")
                }
            }
        )
    }
  return (
    <div className='background-image'>       
<div className="container" style={{marginTop:"15%"}}>

    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className='heading'>User Login</h2>
            <p className='section'>to continue</p>
            <label htmlFor="" className="form-label">Username</label>
            <input name ="username"  type="text" className="form-control" onChange={changeinput} />
            <label htmlFor="" className="form-label">Password</label>
            <input name ="password"  type="password" className="form-control" onChange={changeinput} />
            <button class="btn btn-primary" type="submit" onClick={btnclick}>Sign in</button>
            <Link to = '/register' className='linktosignin' style={{textDecoration:'none'}}>Don't have an account? Sign up</Link>
       
            </div> 
    </div>
</div>




    </div>
  )
}

export default LoginUser