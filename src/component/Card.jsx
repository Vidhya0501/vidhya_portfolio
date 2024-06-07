import React from 'react'

function Card({data}) {
  return (
    <div className='col wrapper mt-4'>

<div className="card" style={{width: "18rem"}}>
     <img className="card-img-top" src={data.image} alt="Card image cap"/>
     <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.link} className="btn btn-primary" target="_blank">Explore Project</a>
  </div>
</div>
</div>

  )
}

export default Card