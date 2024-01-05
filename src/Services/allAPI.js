import { BASE_URL } from "./BASE_URL"
import { commonAPI } from "./commonAPI"

// add employee
export const addEmployeeApi=async (reqBody)=>{
    return await commonAPI("POST",`${BASE_URL}/employees/add`,reqBody,"")
}

//get all employees
export const getallEmployeesAPI=async(searchKey)=>{
    return await commonAPI("GET",`${BASE_URL}/employees/get?search=${searchKey}`,"","")
}

// edit employee
export const editEmployeeApi = async(id,reqBody)=>{
    return await commonAPI("PUT",`${BASE_URL}/employees/edit/${id}`,reqBody,"")
}

// remove employee
export const removeEmployeeApi=async(id)=>{
    return await commonAPI("DELETE",`${BASE_URL}/employees/delete/${id}`,{},"")
}
