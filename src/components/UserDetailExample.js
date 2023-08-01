import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UserDetailExample() {
    const  {id}  =useParams();
    const [user ,setUser]=useState(null);
  
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[]);
  return (
    <div>
        <h2>Kullanıcı Detayları</h2>
        {user && <pre>{JSON.stringify(user,null,2)}</pre>}
        <Link to={`/users/${Number(id)+1}`}>Bir sonraki Kullanıcı</Link>
        
    </div>
  )
}

export default UserDetailExample