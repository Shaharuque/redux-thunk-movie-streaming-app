import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movies/movieSlice'  //movieReducer ekta naam diye reducer function import kora hocchey from movieSlice.js

export const store=configureStore({
    reducer:{
        movies:movieReducer,        //adding movieReducer to the store //movies it is the name of slice we defined in movieSlice.js
    },
})