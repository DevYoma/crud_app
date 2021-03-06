import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import firebaseDb from "../firebase";

const Contacts = () => {

    //variables from database
    var [contactObjects, setContactObjects] = useState({});

    //updating
    var [currentId, setCurrentId] = useState('');

    useEffect(()=> {
        firebaseDb.child('contactsinfo').on('value', snapshot => {
            if(snapshot.val() != null){
                setContactObjects({
                    ...snapshot.val()
                })
            }
        })
    }, []);

    const addOrEdit = obj => {
        firebaseDb.child('contactsinfo').push(
            obj, err => {
                if (err){
                    console.log(err)
                }
            }
        )
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
                    {/* <ContactForm addOrEdit={addOrEdit}/> */}
                    <ContactForm {...({addOrEdit, currentId, contactObjects})} />
                </div>
                <div className="col-md-7">
                    {/* rendering data from the database */}
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // keys() returns a list of array...
                                Object.keys(contactObjects).map(id => {
                                   return <tr key={id}>
                                        <td>{contactObjects[id].fullName}</td>
                                        <td>{contactObjects[id].mobile}</td>
                                        <td>{contactObjects[id].email}</td>
                                        <td>
                                            <button className="btn text-primary" onClick={()=> {setCurrentId(id)}}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className="btn text-danger">
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>    
     );
}
 
export default Contacts;