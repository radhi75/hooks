import React from 'react'
import { Rating } from '@mui/material';
import { useState } from 'react';
import './Ratesearch.css'

const Ratesearch = ({setRate}) => {
    const [value,setValue] =  useState('');
   
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