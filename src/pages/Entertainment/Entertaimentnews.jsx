import React from 'react'
import styles from './Entertainment.module.css'
const Entertaimentnews = () => {
  return (
    <div>
        <h3 className={styles.enternewshead}>Entertainment News</h3>
        <div className={styles.temp}>
        <img className={styles.imgstyle} src="https://images.indianexpress.com/2022/06/disha-patani-820.jpg" alt="" />
        <h2 className={styles.center}>GALLERY OF THE DAY</h2>
        <p style={{textAlign:'center'}}>Disha Patani Is Unrecognisable In These Throwback Pics: Actor's Transformation Over The Years</p>
        </div>
    </div>
  )
}

export default Entertaimentnews