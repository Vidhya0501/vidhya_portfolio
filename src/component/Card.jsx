import React from 'react'

function Card({data}) {
  return (
    <div className='col d-flex justify-content-between m-2 p-2'>

<div className="card" style={{width: "18rem"}}>
     <img className="card-img-top" src={data.image} alt="Card image cap"/>
     <div className="card-body">
    <h5 className="card-title">{data.name}</h5>
    <p className="card-text">{data.description}</p>
    <div className='d-flex justify-content-between'>
    <a href={data.sourceLink} className="btn border bg-dark text-orange " target="_blank">Github</a>
    <a href={data.deployedLink} className="btn border bg-dark text-orange " target="_blank">Explore Project</a>
    </div>
    
  </div>
</div>
</div>

  )
}

export default Card