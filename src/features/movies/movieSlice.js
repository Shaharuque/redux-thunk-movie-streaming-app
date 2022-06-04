import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/MovieApiKey';

//we will make api call with the help of async action creator(Home component a API call na korey movieSlice/slice a api call korbo async Thunk use kroey)
//fetchAsyncMovies is the name of action creator using async redux thunk
//remember,fetchAsyncMovies=>its like async action
export const fetchAsyncMovies=createAsyncThunk('movies/fetchAsyncMovies', async(search)=>{
    // const movieText='harry'  //dynamicly ashbey data search field a ja type kora hobey
    //API CALL
    const response=await movieApi.get(`?apikey=${APIKEY}&s=${search}&type=movie`)        //inside get i need to provide api end point to do api call
    .catch((err)=>{
        console.log(err)
    })
    //console.log(response)

    return response.data        //returning async action creator
})
//fetching shows data from api using async redux thunk
//'movies/fetchAsyncShows'=>kind of redux thunk convention
export const fetchAsyncShows=createAsyncThunk('movies/fetchAsyncShows', async(search)=>{
    // const movieText='Friends'
    //API CALL
    const response=await movieApi.get(`?apikey=${APIKEY}&s=${search}&type=series`)        //inside get i need to provide api end point to do api call
    .catch((err)=>{
        console.log(err)
    })
    //console.log(response)

    return response.data        //returning async action creator
})

//fetching movie/show details from api using async redux thunk based on itemID
//'movies/fetchAsyncShows'=>kind of redux thunk convention
export const fetchAsyncMovieOrShowDetail=createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async(itemId)=>{    //base on the itemId data will be fetched from api
    //API CALL
    const response=await movieApi.get(`?apikey=${APIKEY}&i=${itemId}&plot=full`)        //inside get i need to provide api end point to do api call
    .catch((err)=>{
        console.log(err)
    })
    //console.log(response)

    return response.data        //returning async action creator
})



//initial state declaring 
const initialState={
    movies: {},
    shows:{},
    selectedMovieOrShow:{},
    error:{},
}

const movieSlice=createSlice({
    name:"movies ",
    initialState,

    //inside reducers (sync) actions creator will be defined
    reducers:{
        addmovies: (state, {payload})=>{  //
            state.movies=payload;    //initial state update         //here we don't need to follow immutability because in redux toolkit it uses immer jsx.
        },
        removeSelectedMovieOrShow: (state)=>{
            //removing clicked movieorshow details
            state.selectedMovieOrShow={}
        }
    },

    //trick to remember createAsyncThunk/thuk use korley reducers:{addmovies:.. } ai partuku asholey na korleo choley aikhaney
    //Async action gula extraReducers ar vitor rakhbo
    extraReducers:{ //extraReducers a async action creator gula thakbey
        [fetchAsyncMovies.pending]:()=>{            //redux createAsyncThunk ar lifecycle->pending,fulfilled and rejected
            console.log('pending')
        },
        //api call korey successfully mavies data fetch kortey parley initial state ar movies name ar property update hobey
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{   //payload => fetchAsyncMovies() ar thekey returned data 
            state.movies = payload; //remember: return {...state,shows:payload}   ,state.movies = payload;  both works as same
            
            // console.log('movies data Fetched successfully')
            // return {...state,movies:payload}   
        },
        //API call fail holey 
        [fetchAsyncMovies.rejected]:(state,{error})=>{
            state.error = error;
            
        },
         //api call korey successfully shows data fetch kortey parley initial state ar shows name ar property  update hobey(this process is called state update using redux thunk)
         [fetchAsyncShows.fulfilled]:(state,{payload})=>{   //payload => fetchAsyncShows() ar thekey returned data 
            console.log('shows data Fetched successfully')
            return {...state,shows:payload}   
        },
         //api call korey successfully shows data fetch kortey parley initial state ar selectedMovieOrShow name ar property  update hobey(this process is called state update using redux thunk)
         [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{   //payload => fetchAsyncShows() ar thekey returned data 
            console.log('Item data Fetched successfully')
            return {...state,selectedMovieOrShow:payload}   
        },
    }
})

export const {addmovies,removeSelectedMovieOrShow} =movieSlice.actions  //exporting 'addmovies' action to use in further use in component
//exporting reducer
export default movieSlice.reducer;


export const getAllMovies=(state)=>state.movies.movies //state.sliceName.initialState_property //getAllMovies a sob data store hobey, initial state update ar por jei data thakbey movies property tey sei data store hobey getAllMovies a. and getAllMovies can be called from any component wen we needed using useSelector hook
export const getAllShows=(state)=>state.movies.shows
export const getMovieorSerieDetails=(state)=>state.movies.selectedMovieOrShow