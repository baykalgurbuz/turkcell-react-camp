import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserDetail({activeUserId}) {
    const [user,setUser]=useState([null]);
    const [loading,setLoading]=useState(false);
    console.log(activeUserId)
    useEffect(()=>{
    setLoading(true);
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
    .then((res)=>setUser(res.data))
    .finally(()=>setLoading(false));        
    },[activeUserId])
   
  return (
    <div>
    <h1>UserDetail</h1>
    {loading && <div>Yükleniyor .....</div>}

     {!loading && JSON.stringify(user,null,2)} 
    </div>
  )
}

export default UserDetail