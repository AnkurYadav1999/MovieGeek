import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movies/movieSlice'

const movieBase=configureStore({
    reducer:{
      movieReducer:movieReducer
    }
})

export default movieBase;