import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
    const [formData, setFormData] = useState({
        
      });
const navigate=useNavigate()
    
      const { username, password } = formData;
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit =  (event) => {
        event.preventDefault();
        try {
            console.log({username,password});
          const response =  axios.post(
            "http://localhost:3001/user-login",
            {
              username: username,
              password: password,
            }
          );
         
          console.log(response.data);
          
          if (response.data.status=="Login Successful"){
            const token= response.data.token
            const userId=response.data.username
            sessionStorage.setItem('userToken',token)
            sessionStorage.setItem('userId', userId)
            // navigate('/user-dashboard')
            alert("Login successful");
          } else  {
            alert("Login Failed");
          }
          
          
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className='background-image'>       
<div className="container" style={{marginTop:"3%"}}>

    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className='heading'>Sign up</h2>
            <p className='section'>to continue</p>
            
            <label htmlFor="" className="form-label">Username</label>
            <input name ="username" type="text" className="form-control" onChange={handleChange} />
            <label htmlFor="" className="form-label">Password</label>
            <input name ="password" type="password" className="form-control"  onChange={handleChange}/>
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Sign up</button>
            <p className='linktosignin'>Already have an account? <a href="">Sign in</a></p>
       
            </div> 
    </div>
</div>

    </div>
  )
}

export default UserLogin;
