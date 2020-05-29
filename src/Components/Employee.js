import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import uuid from 'uuid/dist/v1'

//{name: 'Emore Ogheneyoma Lawrence', mobile: '0434234', email: 'yoma@gmail.com', address: 'London'}
const Employee = () => {

    const [employees, setEmployees] = useState([
        {name: 'Example', mobile: '0434234', email: 'example@gmail.com', address: 'London', id: 1}
    ])

    
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(name, mobile, email, address)
    // }

    //update function
    const updateEmployee = (id) => {
        console.log("I still dey settle this UPDATE FUNCTION MATTER..");
    }

    //delete function
    const removeEmployee = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id))
    }

    const addEmployee = (name, mobile, email, address) =>{
        // console.log(employees);
        setEmployees([...employees, {name: name, mobile: mobile, email: email, address: address, id: uuid()}])
        console.log(employees);
        
        //console.log(setEmployees([...employees]));
    }


    return ( 
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-4 text-center">Contacts Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <EmployeeForm addEmployee={addEmployee} />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               employees.map(employee => {
                                   return (
                                       <tr key={employee.name}>
                                           <td>{employee.name}</td>
                                           <td>{employee.mobile}</td>
                                           <td>{employee.email}</td>
                                           <td>
                                               <button className="btn text-primary" >
                                                   <i className="fa fa-pencil-alt" aria-hidden="true" onClick={updateEmployee}></i>
                                               </button>
                                               <button className="btn text-danger" onClick={() => removeEmployee(employee.id)}>
                                                   <i className="fa fa-trash-alt" aria-hidden="true"></i>
                                               </button>
                                           </td>
                                          
                                       </tr>
                                   ) 
                               })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>    
     );
}
 
export default Employee;