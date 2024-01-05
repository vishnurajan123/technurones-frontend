import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Header/>
        <div  className='main d-flex justify-content-evenly align-items-center container-lg flex-wrap-reverse w-100 '>
    
            
    <div className='second'>
        <img  src="https://img.freepik.com/free-vector/organization-abstract-concept_335657-3015.jpg" alt="" />

    </div>
    <div className='first'>
        <h1>
            The <br />
            Complete <br />
            <span style={{color:"blue"}}>Employee <br /> </span>Manager
        </h1>
    </div>



</div>
<div className='container  d-flex justify-content-evenly flex-wrap mt-5 pt-5'>
<Link to={'/employees'}>
         <div className='box  d-flex justify-content-center align-items-center'>
            <h3>Add <span >Employees</span></h3>
    
        </div>
     </Link>
    <Link to={'./employees'}>
         <div className='box  d-flex justify-content-center align-items-center'>
            <h3>Update <span >Employees</span></h3>
    
        </div>
     </Link>
     <Link to={'./employees'}>
         <div className='box  d-flex justify-content-center align-items-center'>
            <h3>Remove <span >Employees</span></h3>
    
        </div>
     </Link>

</div>
<div className='d-flex justify-content-center align-items-center view'>
<Link to={'./employees'}>
    <button>View Employees</button>
    
</Link></div>
        <Footer/>
    </div>
  )
}

export default Home