import React from 'react'
import { Rating } from '@mui/material';

import './Ratesearch.css'

const Ratesearch = ({value,setValue}) => {
    
   console.log(value) 
   return (
    <div className='one'>
    <Rating
            name="simple-controlled"
           value={value}
           onChange={(event, newValue) => {
           setValue(newValue);
           
           
           
  } }
  
/></div>
  )
}

export default Ratesearch