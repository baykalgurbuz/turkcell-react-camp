import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Axios() {const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);


    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .finally(()=>setLoading(false))
    },[]);

  return (
    <div>
        <h2>Users Fetching</h2>
        {
            loading && <div>Yükleniyor...</div>
        }
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Axios