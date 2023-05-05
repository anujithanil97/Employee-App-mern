import React from 'react'
import { Link } from 'react-router-dom'

const UserHeader = () => {
const btnlogout= ()=>{
  localStorage.clear();
}

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-secondary" >
  <div className="container-fluid">
  <Link to="/" className="navbar-brand" style={{color: 'green'}}>Employee App</Link>
    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item" >
          <Link to='/user-dashboard'  aria-current="page" style={{marginRight:40, marginLeft: 420,textDecoration:'none'  }}>Employee Dashboard</Link>
        </li>
        
        <li className="nav-item">
        <Link to='/login-user' onClick={btnlogout}  aria-current="page"  style={{textDecoration:'none'  }} >Logout</Link>
          {/* <a className="nav-link active empform" href="/admin-login">Logout</a> */}
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </div>
)
}

export default UserHeader