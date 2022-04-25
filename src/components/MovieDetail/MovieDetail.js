import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  fetchAsyncMovieOrShowDetail,
  getMovieorSerieDetails,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";

import { BsHandThumbsUp } from "react-icons/bs";
import { AiFillStar,AiOutlineClockCircle } from "react-icons/ai";



const MovieDetail = () => {
  const [showMore,setShowMore]=useState(false)
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  //console.log(imdbId)

  useEffect(() => {
    //async action called/dispatch
    dispatch(fetchAsyncMovieOrShowDetail(imdbId));

    //normal/sync action called
    return()=>{
        dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbId]);

  //getting clicked movie details from store/movieSlice using useSelector hook
  const details = useSelector(getMovieorSerieDetails);
  console.log(details);
  const {Title,imdbRating,Year,Runtime,imdbVotes,Poster,Plot,Director,Actors,Genre,Language,Awards}=details

  return (
    <>
    {
        Object.keys(details).length === 0 ?
        // data loading shes na howa porjonto 'Loading...' spinner show korbey
        <div style={{textAlign:'center' ,marginTop:'100px'}}>Loading...</div>  
        :
        <ContainerDiv>
            <InfoDiv>
                <TitleHead>{Title}</TitleHead>
                <ShortInfo>
                    <Paragraph>IMBD Rating <AiFillStar style={{color:'yellow',marginLeft:'5px'}}></AiFillStar>: {imdbRating}</Paragraph>
                    <Paragraph>IMDB Votes <BsHandThumbsUp style={{color:'yellow',marginLeft:'5px'}}></BsHandThumbsUp>: {imdbVotes}</Paragraph>
                    <Paragraph>Runtime <AiOutlineClockCircle style={{color:'yellow',marginLeft:'5px'}}></AiOutlineClockCircle>: {Runtime}</Paragraph>
                    <Paragraph>Year: {Year}</Paragraph>
                </ShortInfo>
                <PlotStory>{Plot}</PlotStory>
                <div style={{marginTop:'50px'}}>
                    <MovieInfo>Director: {Director}</MovieInfo>
                    <MovieInfo>Actors: {Actors}</MovieInfo>
                    <MovieInfo>Genre: {Genre}</MovieInfo>
                    <MovieInfo>Language: {Language}</MovieInfo>
                    <MovieInfo>Awards: {Awards}</MovieInfo>
                </div>
            </InfoDiv>
            <ImageContainer>
            <Image src={Poster} /> 
            </ImageContainer>
      </ContainerDiv>
    }
    </>
  );
};

export default MovieDetail;

const TitleHead=styled.h1`
    font-family:sans-serif;
`
const ShortInfo=styled.div`
    font-size:15px;
    display:flex;
`
const MovieInfo=styled.p`
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:15px;
    margin-top:0;
`
const Paragraph=styled.p`
    margin-right:20px;
    display:flex;
`
const ContainerDiv=styled.div`
    padding:20px;
    display:grid;
    grid-template-columns: 2fr 1fr;
    gap:20px;
`
const InfoDiv=styled.div`
    padding-left:40px;

`
const Image=styled.img`
    border-radius:10px;
`
const PlotStory=styled.p`
    font-family:sans-serif;
`
// const Button=styled.button`
//     margin-top:10px;
//     background-color:teal;
//     border-radius:5px;
//     border:1px solid teal;
//     color:white;
//     font-family:sans-serif;
// `
const ImageContainer=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

