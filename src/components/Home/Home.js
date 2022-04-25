import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
//importing base url
// import movieApi from '../../common/apis/movieApi';
// import { APIKEY } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addmovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    //Task: whenever i get data from api i want to dispatch an action so that after doing dispatch this will go to reducer and reducer will the initial state

    const dispatch=useDispatch()
    const movieText='harryx'
    const showtext='Friends'
    // const movieText='harry'

    //fetching movies data from api
    useEffect(()=>{
        //dispatch 'fetchAsyncMovies' action creator
        dispatch(fetchAsyncMovies(movieText))
        //dispatch 'fetchAsyncShows' action creator
        dispatch(fetchAsyncShows(showtext))


        // const fetchMovies=async ()=>{
        //     const response=await movieApi.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)        //inside get i need to provide api end point to do api call
        //     .catch((err)=>{
        //         console.log(err)
        //     })
        //     //console.log(response)

        //     //dispatch action/action called
        //     dispatch(addmovies(response.data))  //'addmovies' action a parameter hisabey fetched data send 
        // }
        // fetchMovies() //function call
    },[dispatch])
    return (
        <div>
            
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;