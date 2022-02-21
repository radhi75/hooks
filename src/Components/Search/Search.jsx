import React from 'react'
import { moviesData } from '../../Constants/Data';
import "./Search.css"

const Search = ({setName}) => {
    const handleInput = (event) =>{
        setName(event.target.value);
    };
  return (
    <div className="search">
    <input type="text" placeholder="looking for a movie"
        onChange={handleInput} className="input"
    />
    <ul>
      {moviesData.map(name =>{
        return (
          <li className='list' key={name.id}>{name.name}</li>
      )})}
    </ul>
      
    </div>
  );
};

export default Search
