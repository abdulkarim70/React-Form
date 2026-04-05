import React, { useState } from 'react';

const ControlledField = () => {
    const [name,setname]=useState('')
    const[email, setemail]=useState('')
    const [password, setPassword]=useState('')
    const [error, seterror]=useState('')
    const handleSubmit=(e)=>{
e.preventDefault()
console.log(email, password, name);


    }
   const handlePasswordOnchange=e=>{
console.log(e.target.value);
setPassword(e.target.value)
if(password.length<6){
    seterror('Password must be six character or longer')
}
else{
    seterror('')
}
   }
   const handleEmailChange=e=>{
    setemail(e.target.value)
   }

const handleNameChange=e=>{
    setname(e.target.value)
}




    return (
        <div>
           <form  onSubmit={handleSubmit}>
            <input onChange={handleNameChange} type="text" defaultValue={name} />
            <br />
            <input type="email" onChange={handleEmailChange} defaultValue={email} name="email"  placeholder='email' required />
            <br></br>
            <input type="password" onChange={handlePasswordOnchange} defaultValue={password} name="password"  placeholder='Password' required/>
            <br></br>
            <input type="submit" value="Submit" />
            </form> 
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;