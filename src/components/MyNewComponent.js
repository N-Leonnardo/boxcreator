import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [fnameError, setFNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lnameError, setLNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [pwError, setPWError] = useState("");
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFNameError("");
        } else if(e.target.value.length < 3) {
            setFNameError("Title must be 3 characters or longer!");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLNameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setLNameError("Title must be 3 characters or longer!");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Title is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Title must be 3 characters or longer!");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPWError("Title is required!");
        } else if(e.target.value.length < 3) {
            setPWError("Title must be 3 characters or longer!");
        }
    }
    {/* rest of component removed for brevity */}
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFirstName } />
                {
                    fnameError ?
                    <p style={{color:'red'}}>{ fnameError }</p> :
                    ''
                }

                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName } />
                {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                }

                <label>Email: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }

                <label>password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    pwError ?
                    <p style={{color:'red'}}>{ pwError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create Movie" />
        </form>
    );
}
    
export default UserForm;
