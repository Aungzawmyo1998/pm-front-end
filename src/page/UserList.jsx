import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function UserList() {
    const [userData, setUserData] = useState("");

    const fetchData =async ()=>{

        try {
            const response = await axios.get('http://localhost:3500/users');
            setUserData(response.data);
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        fetchData();
    },[])
    
  return (
    <div>
        
    </div>
  )
}
