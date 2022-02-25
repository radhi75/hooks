import React from 'react'
import { useParams } from 'react-router-dom'
import "./Trailer.css"


const Trailer = ({Data}) => {
  let {id} = useParams();
  
  return (
    <div className='trailer'>
    {
      Data.filter((movie)=>movie.id==id).map((movie)=>
      <div className='trailer-info'>
        <h2 className='trailer-title'>{movie.name}</h2>
        
        <iframe width="800" height="500" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>

        </div>)
      
    }
    
    </div>
    
  )
}


export default Trailer