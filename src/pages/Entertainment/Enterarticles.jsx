import React from 'react'
import styles from './Enterarticles.module.css'
import { useNavigate } from 'react-router-dom'
const Enterarticles = ({title,content,publishedAt,urlToImage,description}) => {
let obj={
  title:title,
  content:content,
  img:urlToImage,
  des:description
}

const navigate=useNavigate()
const  haldleclick=()=>{
  
    localStorage.setItem('detail',JSON.stringify(obj))
    navigate('detailsnews')
  }
 
    return (
    <div className={styles.mainarticles}>
      <div className={styles.img}>
      <img className={styles.articlesimg} src={urlToImage} alt=""/>
      </div>
    
      <div className={styles.articles}>
        
          <h4 onClick={haldleclick} className={styles.headline}>{title}</h4>
          <div style={{fontSize:'small',marginTop:'5px'}}>{publishedAt}</div>
          
          <p className={styles.para}>{content}</p>
          <hr />
      
      </div>
    
    </div>
  )
}

export default Enterarticles