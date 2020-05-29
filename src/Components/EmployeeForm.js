import React, { useState } from 'react';

const EmployeeForm = (props) => {

    // const [Employee, setEmployee] = useState([
    //     {
    //         name: 'Yoma', mobile: 656474 , email: 'yoma@gmail.com', address: 'London'
    //     }
    // ])

    const [name, setName] = useState('');
    const [mobile, setMoblie] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //console.log(name, mobile, email, address)
        props.addEmployee(name, mobile, email, address);
        setName('')
        setMoblie('')
        setEmail('')
        setAddress('')
        // props.updateEmployee();
    }
   
    return ( 
        <form autoComplete="off" onSubmit={handleFormSubmit} >
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" required value={name} onChange = {(e) => setName(e.target.value)}  />
            </div>

            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-mobile-alt" aria-hidden="true"></i>
                        </div>
                    </div>
                    <input className="form-control" required  placeholder="Mobile" value={mobile} onChange = {(e) => setMoblie(e.target.value)} />
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                    </div>
                    <input className="form-control" required placeholder="Email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
                </div>

            </div>

            <div className="form-group">
                <textarea className="form-control" required placeholder="Address" value={address} onChange = {(e) => setAddress(e.target.value)} ></textarea>
            </div>
            <div className="form-group">
                <input type="submit" value="Add Employee"  className="btn btn-primary btn-block" />
            </div>
        </form>
     );
}
 
export default EmployeeForm;

//onClick={props.addEmployee}

