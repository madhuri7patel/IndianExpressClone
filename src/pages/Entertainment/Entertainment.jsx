import React from 'react'
import styles from './Entertainment.module.css'
const Entertainment = () => {


  return (
   <>
   <div className='Entertainment'>
    <div className={styles.leadstory}>
    <div className={styles.first}>
      <img src="https://images.indianexpress.com/2013/12/sushant.jpeg" alt="sushant" style={{height:'417px'}} />
      <h3 className={styles.bighead}>
On Sushant Singh Rajput's second death anniversary, all the major players from Rhea Chakraborty to Siddharth Pithani and where they are now</h3>
      
    </div>
    <div className='second'>
      <div className='subnews1'>
        <img src="https://images.indianexpress.com/2021/08/Anupam-Kher-wishes-wife-Kirron-Kher-a-happy-36th-wedding-anniversary-1200.jpg?resize=450,250" alt=""  style={{width:'250px'}}/>
        <h4 className={styles.minihead} >When Kirron Kher revealed she divorced her husband to marry Anupam Kher: 'He had nothing then'</h4>
        <img src="https://images.indianexpress.com/2021/08/Anupam-Kher-wishes-wife-Kirron-Kher-a-happy-36th-wedding-anniversary-1200.jpg?resize=450,250" alt="" style={{width:'250px'}} />
        <h4 className={styles.minihead}>When Kirron Kher revealed she divorced her husband to marry Anupam Kher: 'He had nothing then'</h4>
        </div> 
    
    </div>
    </div>
   </div>
   </>
  )
}

export default Entertainment