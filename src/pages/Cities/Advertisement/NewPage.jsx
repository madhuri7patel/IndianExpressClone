import React from 'react'
import { useContext } from 'react'
import { NewsContext } from '../NewsContext'

const NewPage = () => {

  const{singlepage}= useContext(NewsContext)
  console.log(singlepage)
  return (
    <>
    <div class="card mb-3" style={{marginTop:"12px"}}>
    <img src={singlepage.urlToImage} class="card-img-top" alt="..." style={{width:"90%" ,margin:"auto"}} />
    <div class="card-body" style={{margin:"auto"}}>
      <h5 class="card-title">{singlepage.title}</h5>
      <p class="card-text">{singlepage.description}</p>
      <p class="card-text"><small class="text-muted">{singlepage.publishedAt}</small></p>
    </div>
  </div>
 
  </>
  )
}

export default NewPage