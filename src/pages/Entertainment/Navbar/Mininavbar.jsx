import React from 'react'
import styles from '../Navbar/Mininavbar.module.css'
const Mininavbar = () => {
   

    const handleclick=(e)=>{
      
        localStorage.setItem('titles',JSON.stringify(e.target.innerText))
        window.location.reload()
    }



  return (
    <div className={styles.mainnav}>
        <div className={styles.dark}>ENTERTAINMENT</div>
       <div className={styles.small}>
       <div onClick={handleclick}>BOLLYWOOD</div>
        <div onClick={handleclick}>HOLLYWOOD</div>
        <div onClick={handleclick}>TELEVISION</div>
        <div onClick={handleclick}>TAMIL</div>
        <div onClick={handleclick}>TELUGU</div>
        <div onClick={handleclick}>MALAYALAM</div>
        <div onClick={handleclick}>WEB SERIES</div>
       </div>
    </div>
  )
}

export default Mininavbar