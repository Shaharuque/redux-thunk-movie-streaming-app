import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";


const Header = () => {
  const dispatch=useDispatch()
  const [search,setSearch]=useState("")

  const submitHandle=(e)=>{
    e.preventDefault();
    //console.log(search)  //input field a type kora value ta passi after clicking search btn (************* most importatnt)
    //dispatch async action
    dispatch(fetchAsyncMovies(search))  //search input ar opor base korey data fetch hobey 
    dispatch(fetchAsyncShows(search))
    setSearch("")
  }

  return (
    <Container>
    <LinkDiv>
      <div>
          <form style={{display:'flex'}} onSubmit={submitHandle}>
            <input style={{width:'20vw'}} type='text' value={search}  placeholder='Search movies' onChange={(e)=>setSearch(e.target.value)}/>
            <button type="submit"><AiOutlineSearch/></button>
          </form>
      </div>
      <div>
        <Link style={{textDecoration:'none',marginRight:'10px',color:'teal'}} to="/">Home</Link>
        <Link style={{textDecoration:'none',marginRight:'10px',color:'teal'}} to="">About</Link>
      </div>
    </LinkDiv>
    </Container>
  );
};

export default Header;


const LinkDiv=styled.div`
    padding:0 20px;
    color:teal;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
`
const Container=styled.div`
    background-color:lightcyan;
    height:8vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
`