import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LanguageContext from '../contexts/LanguageContext'

function Footer() {
    const {theme,toggleTheme} =useContext(ThemeContext)
    const {lang} =useContext(LanguageContext)
  return (
    <div>
        <hr/>
        Footer
        <div>
            Aktif Theme {theme}
        </div>
        <div>
            Aktif Language {lang}
        </div>
        <button onClick={ toggleTheme}>Change Theme</button>
    </div>
  )
}

export default Footer