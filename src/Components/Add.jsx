import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addEmployeeApi } from '../Services/allAPI';
import { addEmployeeResponseContext } from '../Contexts/ContextShare';

function Add() {

    const {addEmployeeResponse,setAddemployeeResponse}=useContext(addEmployeeResponseContext)
 

    const [employee,setemployee]=useState({
      empId:"",name:"",email:"",phone:"",place:""
    })
    const [show, setShow] = useState(false);
    const [isEmailValid,setIsEmailValid]=useState(true)
    const [isNameValid,setIsName]=useState(true)
    const [isPlaceValid,setIsPlace]=useState(true)



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAdd=async (e)=>{
    e.preventDefault()
    const {empId,name,email,phone,place}=employee
    if(!empId || !name || !email || !phone || !place){
      toast.info("Please fill the form completely")
    }
    else{
      const result=await addEmployeeApi(employee)
      if(result.status===200){
        setemployee({
            empId:"",
          name:"",
      email:"",
      place:"",
      phone:""
        })
        setAddemployeeResponse(result.data)
        handleClose()
        toast.success(`${name} has added successfully`)
      }
      else{
        toast.error(result.response.data)
        console.log(result);
      }
    }
  }


  console.log(employee);

  const handleEmail=(e)=>{
    

    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(e.target.value.match(mailformat)){
      setIsEmailValid(true)
      setemployee({...employee,email:e.target.value})  
    }
    else{
      setIsEmailValid(false)
      setemployee({...employee,email:e.target.value})  
    }
  }
const handleName=(e)=>{
  if(e.target.value.match(/^[a-zA-Z ]+$/)){
    setIsName(true)  
    setemployee({...employee,name:e.target.value})  
  }
    else{
      setIsName(false)
      setemployee({...employee,name:e.target.value})  
    }
}

const handlePlace=(e)=>{
  if(e.target.value.match(/^[a-zA-Z0-9 ]+$/)){
    setIsPlace(true)  
    setemployee({...employee,place:e.target.value})  
  }
    else{
      setIsPlace(false)
      setemployee({...employee,place:e.target.value})  
    }
}


  return (
    <div >

<div className="d-flex align-items-center">
      <button onClick={handleShow}  className='btn btn-dark fs-5'> Add New Employee &nbsp;<i class="fa-solid fa-plus"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following details</p>
         <Form/>
         <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="number"
            placeholder="ID"
            onChange={(e)=>setemployee({...employee,empId:e.target.value})}
           
           
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Name"
            onChange={(e)=>handleName(e)}
           
           
          />
        </Form.Group>
        {
          !isNameValid&&

          <div className='text-danger ms-1 mt-3 mb-3'>
            Invalid input
          </div>


        }

       

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Email"
            onChange={(e)=>handleEmail(e)}
          />
        </Form.Group>
        {
          !isEmailValid&&

          <div className='text-danger ms-1 mt-3 mb-3'>
            Invalid input
          </div>


        }

        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="number"
            placeholder="Phone"
            onChange={(e)=>setemployee({...employee,phone:e.target.value})}
           
           
          />
        </Form.Group>


        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Place"
            onChange={(e)=>handlePlace(e)}

          />
        </Form.Group>
        {
          !isPlaceValid&&

          <div className='text-danger ms-1 mt-3 mb-3'>
            Invalid input
          </div>


        }

        

        
       

       

        
        <Form/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button disabled={isNameValid&&isEmailValid&&isPlaceValid?false:true} onClick={handleAdd}  variant="primary" >Add</Button>
        </Modal.Footer>
      </Modal>

      < ToastContainer position='top-right' theme='colored'/>

    </div>
  )
}

export default Add