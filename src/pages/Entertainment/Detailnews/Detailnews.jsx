import React from 'react'
import Entermore from '../Entersidebar/Entermore';

const Detailnews = () => {
    const details=JSON.parse(localStorage.getItem('detail'))
    console.log(details);




  return (
    <div style={{width:'83%',margin:'auto', display:'flex'}}>
      <div>
      <div>
           <h1>{details.title}</h1> 
        </div>
        <div>
            <h3>{details.des}</h3>
        </div>
        <div>
            <img src={details.img} alt=""  style={{height:'356px',width:'640px'}} />
            <div >{details.content}</div>
        </div>
      </div>
        <div>
            <Entermore/>
        </div>
    </div>
  )
}

export default Detailnews