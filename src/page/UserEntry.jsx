import axios from 'axios';
import React, { useState } from 'react'

export default function UserEntry() {

  const [userData, setUserData] = useState(
    {
      username: "",
      password: "",
      role: "admin"
    }
  );

  const inputHandler = (e) => {
    
    const {name, value} = e.target;
    // console.log(value)
    setUserData((prev) => (
      {...prev, [name]:value}
    ));
  }
  // console.log(userData)

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3500/");

  }

  return (
    <div id='userEntry'>
      <div className="form-container">
        <h2 className="header">Register Form</h2>
        <form action="" onSubmit={submitHandler}>
          <div className="row">
            <label htmlFor="">Username </label>
            <input name='username' value={userData.username} onChange={inputHandler} type="text" />
          </div>
          <div className="row">
            <label htmlFor="">Password</label>
            <input name='password' value={userData.password} onChange={inputHandler} type="password" />
          </div>
          <div className="row">
            <label htmlFor="">Role</label>
            <select name="role" value={userData.role} onChange={inputHandler} id="">
              <option value="admin" selected>Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="submit-container">
            <button>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}
