import React, {useState, useEffect} from 'react';

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }
   
    var [values, setValues] = useState(initialFieldValues);

    useEffect(()=>{
        if(props.currentId == ''){
            setValues({
                ...initialFieldValues
            })
        }
        else{
            setValues({
                    ...props.contactObjects[props.currentId]
            })
        }
        // var yoma = props.contactObjects[props.currentId]
        // console.log(yoma);
        // console.log(props.currentId);
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var {name, value} = e.target;
        setValues({
            ...values, 
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
        setValues('');
    }

    return ( 
        <form autoComplete="off" onSubmit={handleFormSubmit} >
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" values= {values.fullName} onChange={handleInputChange} />
            </div>

            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-mobile-alt" aria-hidden="true"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile" name="mobile" values= {values.mobile} onChange={handleInputChange} />
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email" values= {values.email}  onChange={handleInputChange}/>
                </div>

            </div>

            <div className="form-group">
                <textarea className="form-control" placeholder="Address" name="address" values = {values.address} onChange={handleInputChange} ></textarea>
            </div>
            <div className="form-group">
                <input type="submit" value="Save" className="btn btn-primary btn-block"/>
            </div>
        </form>
     );
}
 
export default ContactForm;