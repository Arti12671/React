import React from 'react'
import Employees from "./Employee.json"
// import "./Emp.css"

export const Employee = () => {
  return (
    <div className='parent1'>
        {
          Employees && Employees.map(emp=>{
            return (
              <div className="child">
                
                <h1>Name : {emp.name}</h1>
                <h3>Designation : {emp.designation}</h3>
                <h3>Salary : {emp.salary}</h3>
                {/* <h3>Designation : {emp.designation}</h3> */}
              </div>
            )
          })
        }
    </div>
  )
}
