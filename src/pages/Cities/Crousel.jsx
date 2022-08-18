import React from 'react'
import styled from './Crousel.module.css'

export const Crousel = () => {
  return (
    <>
    <div className={styled.main}>


<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className="carousel-item">
      <img src="https://images.indianexpress.com/2022/06/sidhu_moosewala-1200-1-1.jpg?resize=450,250" className="d-block w-100" alt="Row over remarks on the prophet: Will recover cost of damage to properties from accused, says govt"/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5> */}
        <p > <mark className='text-danger'>Santosh Jadhav from Pune, named in Moosewala murder, 'got 13 pistols from Madhya Pradesh using Lawrence Bishnoi connections' </mark></p>
      </div>
    </div>
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://images.indianexpress.com/2022/06/16063-pti06_16_2022_000146b.jpg" className="d-block w-100" alt="Coaches of 10 trains, buses torched in Bihar; houses of top BJP leaders targeted"/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5> */}
        <p ><mark className='text-success'> Coaches of 10 trains, buses torched in Bihar; houses of top BJP leaders targeted </mark></p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.indianexpress.com/2022/06/Secunderabad-attack.jpg?resize=450,250" className="d-block w-100" alt="Secuderabad attack was planned, mob had WhatsApp group:Police"/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5> */}
        <p ><mark className='text-danger'>Secuderabad attack was planned, mob had WhatsApp group:Police.</mark></p>
      </div>
    </div>

   
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

{/* <div style={{display:"flex",flexDirection:"column"}}>
<div className="card" style={{width: "18rem"}}>
  <img src="https://images.indianexpress.com/2022/06/Madras-HC-12.jpg" className="card-img-top" alt="Don’t arrest sex workers during raids"/>
  <div className="card-body">
    <p className="card-text">Don’t arrest sex workers during raids: HC</p>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src="https://images.indianexpress.com/2022/06/gavel-2-3-8.jpg" className="card-img-top" alt="Karnataka PSI exam scam: Gravity of wrongs more serious than crimes punishable with death: court"/>
  <div className="card-body">
    <p className="card-text">Karnataka PSI exam scam: Gravity of wrongs more serious than crimes punishable with death: court</p>
  </div>
</div>
</div> */}
    </div>
    </>
  )
}
