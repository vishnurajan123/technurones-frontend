import React, { createContext, useState } from 'react'
export const addEmployeeResponseContext=createContext()

function ContextShare({children}) {
    const [addEmployeeResponse,setAddemployeeResponse]=useState({})

  return (
    <>
   <addEmployeeResponseContext.Provider value={{addEmployeeResponse,setAddemployeeResponse}}>
        
        {children}
        
   </addEmployeeResponseContext.Provider>
    </>
  )
}

export default ContextShare