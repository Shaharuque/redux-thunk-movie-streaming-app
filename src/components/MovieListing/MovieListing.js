import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import styled from 'styled-components';

const MovieListing = () => {
  //i want all the movies
  const movies = useSelector(getAllMovies);
  console.log(movies);
  //i want all the shows data
  const shows=useSelector(getAllShows)


  // const renderMovies=
  // movies.response===true ?
  //     movies.Search.map((movie,index)=>{
  //         <MovieCard key={index} movie={movie}></MovieCard>
  //     })
  //     :
  //     <div>
  //         <p>{movies.error}</p>
  //     </div>

  return (
    <>
    {/* movies show */}
    <h4 style={{textAlign:'end',paddingRight:'20px'}}>Top Rated Movies</h4>
    <CardContainer>
      {movies.Response === "True" ? (
        movies.Search.map((movie,index) => <MovieCard key={index} movie={movie}></MovieCard>)
      ) : (
        <div>
          <p>{movies.error}</p>
        </div>
      )}
    </CardContainer>

    {/* shows show */}
    <h1 style={{textAlign:'center',paddingRight:'20px',fontFamily:'monospace'}}>Top Rated Series of the month...</h1>
    <CardContainer>
    {shows.Response === "True" ? (
        shows.Search.map((show,index) => <MovieCard key={index} movie={show}></MovieCard>)
      ) : (
        <div>
          <p>{shows.error}</p>
        </div>
      )}
    </CardContainer>
    </>
  );
};

export default MovieListing;


const CardContainer=styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:80px;
    padding:50px;
`