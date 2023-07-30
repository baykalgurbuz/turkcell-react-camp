import React, { useState } from 'react'

function StateEx() {
    const [user,setUser]=useState({name:"Mehmet",surname:"Seven"});
  return (
    <div>
        <h1>User Information</h1>
        {user.name} - {user.surname}
        <br/>
        <br/>
        <button onClick={()=>setUser({...user,name:"Mehmet Sen Cok Degistin"})}>Isım Değiştir</button>
        <button onClick={()=>setUser({...user,surname:"Seven Sen Cok Degistin"})}>Soyısım değiştir</button>
    </div>
  )
}

export default StateEx