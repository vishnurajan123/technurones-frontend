import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column'
    style={{width:"100%",marginTop:
"150px"}}
    >
        <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
            <div style={{width:"400px"}} className='website'>
                        <h4> Employee Manager</h4>
    
<p>
     Currently v1.0.0.
    
</p>
            </div>
            <div className='as d-flex flex-column'>
                <h4>Links</h4>
                <Link to={'/'}  className='' style={{textDecoration:"none",color:"black"}} >Home</Link>

                <Link to={'/employees'}  className='' style={{textDecoration:"none",color:"black"}}>Employees</Link>



            </div>
            <div className='guids d-flex flex-column'>
            <h4>Guides</h4>
                <a  className='' style={{textDecoration:"none",color:"black"}} >React</a>
                <a  className='' style={{textDecoration:"none",color:"black"}} >React Bootstrap</a>

                <a  className='' style={{textDecoration:"none",color:"black"}}>Routing</a>

            </div>
            <div className='contact d-flex flex-column'>
            <h4>Contact</h4>
            <div>
                
                <input type="text" placeholder='Enter your Mail' className='rounded p-1' />
                <button className='btn btn-dark  rounded ms-1' style={{width:"100px",height:"38px",padding:"0px" }}>Subscribe</button>
                  
            </div>  

            </div>

        </div>
        <p className='mt-4'>Copyright © 2023 Employee Manager.</p>



    </div>
  )
}

export default Footer