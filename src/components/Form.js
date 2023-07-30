import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("Mehmet");
    const [surname,setSurname]=useState("Seven");
    const [gender,setGender]=useState("0");

    // const [forms,setForms]=useState({name:"",surname:"",gender:"0"});

    // const handleChanged =(e)=>{
    //     setForms({...forms,[e.target.name]:e.target.value});
    // }
  return (
    <div>
        <div>
            <div>İsim</div>
            <input placeholder='Isım' value={name} onChange={(event)=>setName(event.target.value)}/>
            <input placeholder='Soyisim' value={surname} onChange={(event)=>setSurname(event.target.value)}/>
        </div>
        <br/>

        <div>
            <div>Cinsiyet</div>
            <select value={gender} onChange={(event)=>setGender(event.target.value)}>
                <option value="0">Erkek</option>
                <option value="1">Kadın</option>
            </select>
        </div>

        <div>
            <strong>
                {name} - {surname}
            </strong>
        </div>


        <div>
            <strong>
                {gender === "0" ? 'Erkek':'Kadın'}
            </strong>
        </div>
    </div>
  )
}

export default Form