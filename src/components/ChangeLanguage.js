import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

function ChangeLanguage() {
    const {lang,setLang}=useContext(LanguageContext)
 
  return (
    <div>
        Aktig Language : {lang}

        <div>
            <button onClick={()=>setLang("tr")}>TR</button>
            <button onClick={()=>setLang("en")}>EN</button>
            <button onClick={()=>setLang("de")}>DE</button>
         
        </div>
    </div>
  )
}

export default ChangeLanguage