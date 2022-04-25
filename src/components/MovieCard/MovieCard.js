import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
    const {Title,Poster,Year,imdbID}=movie

    //defined path a niye jay
    const navigate=useNavigate()
    const movieDetails=()=>{
        navigate(`/movie/${imdbID}`)
    }
    return (
        <CardDiv onClick={movieDetails}>
            <ImageDiv>
                <img style={{width:'50%', borderRadius:'8px'}} src={Poster}></img> 
            </ImageDiv>
           <p style={{textAlign:'center'}}>
               {
                Title.lenght<20 ?Title: Title.slice(0,20)+'...'
                }
            </p> 
           <p style={{textAlign:'center'}}>{Year}</p>
        </CardDiv>
    );
};

export default MovieCard;

const CardDiv=styled.div`
    background-color: rgba(255, 255, 255, .15);  //glass effect code
    backdrop-filter: blur(5px);
    border-radius:10px;
    padding:5px;
    transition: all 0.3s;

    &:hover{
        transform:scale(1.2);
        transition: all 0.3s;
    }
`
const ImageDiv=styled.div`
    display:flex;
    justify-content:center;
   
`
const Button=styled.button`


`