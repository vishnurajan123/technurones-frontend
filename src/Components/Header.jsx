import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-black">
  <div class="container-fluid">
    <Link to={'/'} class="navbar-brand text-white" ><a style={{textDecoration:"none",color:"white"}} >Employee Manager</a></Link>
    <button  class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link to={'/'}  className=' me-5' style={{textDecoration:"none",color:"white"}}>Home</Link>
        </li>
       
        <li class="nav-item">
          <Link to={'/employees'}  className=' me-5' style={{textDecoration:"none",color:"white"}}>Employees</Link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header