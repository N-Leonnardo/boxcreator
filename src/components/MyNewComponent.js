import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Cpassword, setCPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password, Cpassword };
        console.log("Welcome", newUser);
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm password: </label>
                <input type="text" onChange={ (e) => setCPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

        <p> {firstName} </p>
        <p> {lastName} </p>
        <p> {email} </p>
        <p> {password} </p>
        <p> {Cpassword} </p>

    </div>

    );
};
    
export default UserForm;
