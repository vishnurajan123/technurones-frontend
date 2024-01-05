import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Add from './Add'
import './ViewEmployees.css'
import { getallEmployeesAPI, removeEmployeeApi } from '../Services/allAPI'
import Edit from './Edit'
import { addEmployeeResponseContext } from '../Contexts/ContextShare'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ViewEmployees() {
    const {addEmployeeResponse,setAddemployeeResponse}=useContext(addEmployeeResponseContext)
    const [searchKey,setSearch]=useState("")

    const [allEmployees,setEmployees]=useState([])


    const getAllEmployees=async()=>{
        const result=await getallEmployeesAPI(searchKey)
        if(result.status===200){
            setEmployees(result.data)
        }
        else{
            console.log(result);
            console.log(result.response.data);
        }
    }

    useEffect(()=>{
        getAllEmployees()
    },[addEmployeeResponse,searchKey])


    const deleteEmployee=async(id)=>{
        const result=await removeEmployeeApi(id)
        if(result.status===200){
            toast.success("Employee deleted successfully")
            getAllEmployees()
        
        }
        else{
          console.log(result);
          console.log(result.response.data);
        }
      }
      const handleSortId = () => {
        const sortedEmployees = [...allEmployees].sort((a, b) => a.empId - b.empId);
    setEmployees(sortedEmployees);
      }
      const handleSortName=()=>{
        const sortedEmployees = [...allEmployees].sort((a, b) => a.name.localeCompare(b.name));
        setEmployees(sortedEmployees);
      }
    
  return (
    <>
    <Header/>
    <div className='mt-5 pt-5'>
        <div className='d-flex justify-content-between container'>
            <Add/>
            <Link to={'/'} ><button className='btn btn-dark'><i class="fa-solid fa-arrow-left"></i></button></Link>


        </div><h1 className='mt-5 text-center'>Employee <span style={{color:"blue"}}>Deatils</span></h1>
    </div>
    <div className='container'>
        <div className='d-flex mt-5'>

        <Dropdown className='ms-4'>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleSortId} className='text-black' >By ID</Dropdown.Item>
        <Dropdown.Item onClick={handleSortName} className='text-black' >By Name</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div className='d-flex justify-content-center w-100'>
        
            <input value={searchKey} onChange={(e)=>setSearch(e.target.value)} type="text" className='form-control w-75 border-1 ' placeholder='Enter name' />
    
    </div>

        </div>
        <div className='d-flex justify-content-evenly flex-wrap mt-5'>

{
    allEmployees.length>0?allEmployees.map((employee)=>(
    
            <div className='employee mt-4'>
            <p><span style={{color:"blue"}}>ID</span>:{employee.empId} </p>
            <p><span style={{color:"blue"}}>Name</span>:{employee.name}</p>
            <p><span style={{color:"blue"}}>Email</span>:{employee.email}</p>
            <p><span style={{color:"blue"}}>Phone</span>:{employee.phone}</p>
            <p><span style={{color:"blue"}}>Place</span>:{employee.place}</p>
            <div className='d-flex'><Edit editemployee={employee}/><button className='btn p-0' onClick={()=>deleteEmployee(employee._id)}><i className="fa-solid fa-trash fa-2x text-danger"></i></button></div>
        </div>
        
    ))


    : <p className='text-danger text-center'> Nothing to display</p>
}

</div>

           

    </div>
    <Footer/>
    < ToastContainer position='top-right' theme='colored'/>

    </>
  )
}

export default ViewEmployees