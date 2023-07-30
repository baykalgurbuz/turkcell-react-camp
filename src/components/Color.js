import React, { useState } from 'react'

function Color() {
    const [colors,setColors]=useState(["Kırmızı","Mavi","Yesil"]);
    const handleClick =() =>{
        setColors([...colors,Math.random()]);
    }
    return (
    <div>
        <h2>Renkler</h2>
        {colors.map((color,i)=>(
            <div key={i}>{color}</div>
        ))}

        <button onClick={handleClick}>Rastgele Ekle </button>
    </div>
  )
}

export default Color