import React, { useState } from 'react';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);

    }

    return(
        <div className='auth-form-container'> 
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="username" placeholder="Username" id="username"/>

            <label htmlFor="password">Password</label>
            <input value={password} onChange={(p) => setPassword(p.target.value)} type="password" name="password" placeholder="Password" id="password"/>

            <button type="submit">Log In</button>

            </form>
        </div>
    )
}