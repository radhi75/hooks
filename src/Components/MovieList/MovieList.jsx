import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({movies,name,rate}) => {
  return (
    <div className="movies">
      {movies.filter((movies)=>(movies.name.toLowerCase().includes(name.toLowerCase().trim()) || (movies.rate=== rate) )
      ).map((movie,id)=>{
          return(
              <div key={id}>
                  <MovieCard movie={movie}/>
              </div>
          )
      })}
    </div>
  )
}

export default MovieList
