import React from 'react'

const NewsItems = ({title,description,url,imgUrl}) => {
  return (
    
    <div className="card mb-3 d-inline-block  mx-3 px-2 my-5 py-5 " style={{maxWidth:"345px"}}>
    <img src={imgUrl===null?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_M4bMl5SLv3uurHmjcJB4U-92T5H-0cQ5OPWpkcrcw&s":imgUrl} style={{height:"200px",width:"320px"}} className="card-img-top image" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description ? description.slice(0,100):"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe"}</p>
      <a href={url} className="btn btn-primary readmore">Read More</a>
    </div>
  </div>
  
  )
}

export default NewsItems
