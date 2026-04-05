import React from 'react';
import useInputField from '../../Hooks/useinputField';

const HookForm = () => {
const [name, nameOnChange]=useInputField('')
const [email, emailOnChange]=useInputField('')
const [password, passwordOnChange]=useInputField('')
    const handleSubmit=e=>{
        e.preventDefault()
        console.log('submit', name, email, password);
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
            
            <input type="text" defaultValue={name} placeholder='Your Name' onChange={nameOnChange} />
            <br />
            <input type="email" onChange={emailOnChange} placeholder='Your Email Here' name="" id="" />
        
            <br />
            <input type="password" onChange={passwordOnChange} name=""  />
            <br />
            <input type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default HookForm;