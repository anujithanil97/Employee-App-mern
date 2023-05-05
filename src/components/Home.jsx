// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {

//   return (
//     <div className='imagehome'>

//         <div className="my_container">
//             <h1> Welcome to the Employee Portal </h1>

//         </div>
//         <div className='scontainer'>
//             <p>Please login to continue</p>
//             <Link to = {"/admin-login"} className='btn btn-primary' style={{ width: '150px', marginLeft:'-45%', height: '40px'}}>Admin Login</Link>
//             <Link to = {"/login-user"} className='btn btn-primary'  style={{ width: '150px', marginLeft:'5%', height: '40px'}}>User Login</Link>
//         </div>

//         <div className='containerbtn'>
           
//         </div>




//     </div>
//   )
// }

// export default Home

import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
<div className="container1">  
  <div className="header">
    <div className='container2'>
      <div>
        <div className='container3'>
          <div style={{marginLeft:'20px',marginTop:"20px"}}>
          <img  src={require('../Assets/images/logo.svg.png')} style={{height:"50px",width:"50px"}}/>
          </div>
          <h5 style={{marginLeft:'10px',marginTop:'30px'}}> Employee Portal</h5>
        </div>
      </div>
      <div>
      <div className='container4'>
          <div>
          <div style={{marginRight:'20px',marginTop:'20px'}}>
          <Link to = {"/admin-login"} className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2 mt-0 pl-2' >Admin Login</Link>
          </div>
      
          </div>
          <div>
          <div style={{marginRight:'20px',marginTop:'20px'}}>
          <Link to = {"/login-user"} className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2 mt-0'  >User Login</Link>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>  
  <div className="menu" style={{textAlign:'center',marginTop:'50px',padding:"50px"}}>
  <h2>  Welcome to the Employee Portal</h2>
 <p style={{padding:'10px 50px 50px 0px',fontWeight:'300'}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima hic incidunt aut aliquam, facere temporibus. Officia, reiciendis, repudiandae dolorem eum doloremque facere vero voluptas ad quae odit harum laboriosam tempora?</p>

  </div>  
  
  <div className="content">
  <img id='image-section' src={require('../Assets/Home.png.jpeg')} style={{width:'100%'}}/>
  </div>  
  <div className="footer" style={{textAlign:'center',padding:'30px'}}>© 2023 Copyright: 
  Employee Portal.com</div>  
</div>
  )
}

export default Home