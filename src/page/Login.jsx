import React, { useState } from 'react'
import '../asset/styles/login.css'

export default function Login() {

    const [ userData, setUserData ] = useState("");

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginForm = (e) => {

        e.preventDefault();
        setUserData(
            {
                username: userName,
                password: password
            }
        );

        console.log(userData);
    }

    return (
        <div>
            <div className="form-container">
                <h2 className='header'>User Login</h2>
                <form action="" onSubmit={loginForm}>
                    <div className="row">
                        <label htmlFor="">User Name : </label>
                        <input type="text" onChange={(e)=> { setUserName(e.target.value)}} />
                    </div>
                    <div className="row">
                        <label htmlFor="">Password :</label>
                        <input type="password" onChange={(e)=> { setPassword(e.target.value)}} />
                    </div>
                    <div className="button">
                        <button className='sub-btn'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
