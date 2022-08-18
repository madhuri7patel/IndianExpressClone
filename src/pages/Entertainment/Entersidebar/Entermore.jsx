import axios from 'axios'
import React,{useEffect,useState} from 'react'
import styles from '../Entersidebar/Entermore.module.css'
import MovieReview from './MovieReview'
const Entermore = () => {
  const [Moreenter, setMoreenter] = useState([])

  useEffect(() => {
   
    axios
    .get(`https://newsapi.org/v2/everything?q=entertainment&from=2022-05-19&sortBy=publishedAt&apiKey=f67d94ae57ff483f87a5152f802d30da`)
    .then(({data})=>{
      setMoreenter(data.articles)
    })
  
  
  }, [])
  


  


  return (
    <div>
        <h3 style={{marginTop:'10px'}}>MORE ENTERTAINMENT</h3>
        <hr />
        <div>
           {Moreenter.map((data)=>(
            
             <div className={styles.moreent}>
             <img src={data.urlToImage} style={{height:"83px",width:"150px"}} alt="" />
             <div className={styles.sidenews}>
                 <p className={styles.moreentred}>Entertainment</p>
                 <p className={styles.content}>{data.content}</p>
                 <hr />
             </div>
           
         </div>
           ))}
        </div>
        <MovieReview/>
    </div>
   
  )
}

export default Entermore


