import React from 'react'
import styles from '../Navbar/Mininavbar.module.css'
const Headline = () => {
  return (
    <div className={styles.box1}>
        <div className={styles.rbox}>
          <p>MUST READ</p>
        </div>
        <div className={styles.wrt}>
          <marquee>
            LIMITED PERIOD OFFER/ GET THE INDIAN EXPRESS DIGITAL PREMIUM NOW
            WITH AD-LITE
          </marquee>
        </div>
      </div>
  )
}

export default Headline