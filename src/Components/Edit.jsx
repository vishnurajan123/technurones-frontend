import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  editEmployeeApi } from '../Services/allAPI';
import { addEmployeeResponseContext } from '../Contexts/ContextShare';


function Edit({editemployee}) {
    const {addEmployeeResponse,setAddemployeeResponse}=useContext(addEmployeeResponseContext)


    const [employee,setemployee]=useState({
        empId:editemployee.empId, name:editemployee.name,email:editemployee.email,phone:editemployee.phone,place:editemployee.place
    })
    const [isPlaceValid,setIsPlace]=useState(true)
    const [isEmailValid,setIsEmailValid]=useState(true)
    const [isNameValid,setIsName]=useState(true)


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleUpdate=async()=>{
    const result=await editEmployeeApi(editemployee._id,employee)
    if(result.status==200){
     setAddemployeeResponse(result.data)
     handleClose()
     toast.success("Updated successfully")
    }
    else{
      alert(result.response.data)
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
  return (
    <div >

<div className="d-flex align-items-center">
      <button onClick={handleShow}  className='btn p-0 me-3 '><i class="fa-solid fa-pen-to-square fa-2x" style={{color:"blue"}}></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following details</p>
         <Form/>
         
         <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="number"
            placeholder="ID"
            value={employee.empId}
            onChange={(e)=>setemployee({...employee,empId:e.target.value})}
           
           
          />
        </Form.Group>
        


        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={employee.name}
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
            value={employee.email}
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
            type="text"
            placeholder="Phone"
            value={employee.phone}
            onChange={(e)=>setemployee({...employee,phone:e.target.value})}
           
           
          />
        </Form.Group>


        <Form.Group className='mb-3' controlId="formBasicEmail">
          
          <Form.Control
            required
            type="text"
            placeholder="Place"
            value={employee.place}
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
          <Button disabled={isNameValid&&isEmailValid&&isPlaceValid?false:true} onClick={handleUpdate}   variant="primary" >Update</Button>
        </Modal.Footer>
      </Modal>

      < ToastContainer position='top-right' theme='colored'/>

    </div>
  )
}

export default Edit