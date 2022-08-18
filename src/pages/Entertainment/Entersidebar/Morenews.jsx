import axios from 'axios'
import React,{useEffect,useState} from 'react'
import styles from '../Entersidebar/Entermore.module.css'

const Morenews = () => {
  const [Moreenter, setMoreenter] = useState([])
 
  useEffect(() => {
   
    axios
    .get(`https://newsapi.org/v2/everything?q=entertainment&from=2022-05-18&sortBy=publishedAt&apiKey=58aa853356384f19a88049b3ce553605`)
    .then(({data})=>{
      setMoreenter(data.articles)
    })
  
  
  }, [])


  


  return (
    <div>
        <h3 style={{fontSize:'larger'}}>Best Of Express</h3>
        <div>
           {Moreenter.map((data)=>(
            
             <div className={styles.moreent}>
             <img src={data.urlToImage}style={{height:"83px",width:"150px"}}  alt="" />
             <div className={styles.sidenews}>
                 <p className={styles.moreentred}>Entertainment</p>
                 <p className={styles.content}>{data.content}</p>
                 <hr />
             </div>
           
         </div>
           ))}
        </div>
       
    </div>
   
  )
}

export default Morenews


