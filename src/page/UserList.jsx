import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function UserList() {
    const [userData, setUserData] = useState([]);

    const users =async ()=>{

        try {
            const response = await axios.get('http://localhost:3500/users');
            setUserData(response.data);
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        users();
    },[])
    
  return (
    <div>
        <div id="userList">
            <table border={"1"} >
                <thead>
                    <tr>
                        <th>NO </th>
                        <th>username </th>
                        <th>Role </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { userData == null ? ("User Not Found") : (
                        userData.map((user,index)=>(
                            <tr>
                                <td>{ user.index}</td>
                                <td>{ user.username}</td>
                                <td>{ user.role} </td>
                                <td> 
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}
