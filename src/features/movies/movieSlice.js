import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiKey } from '../../common/Apis/ApiKey'
import MovieApi from '../../common/Apis/MovieApi'

export const fetchAsyncMovies=createAsyncThunk('moviesObj/fetchAsyncMovies',async (searchName)=>{
    const response=await MovieApi
       .get(`?apiKey=${ApiKey}&s=${searchName}&type=movie`) 
       return response.data;
});

export const fetchAsyncSeries=createAsyncThunk('moviesObj/fetchAsyncSeries',async (searchName)=>{
    const response=await MovieApi
       .get(`?apiKey=${ApiKey}&s=${searchName}&type=series`) 
       console.log(searchName)
       return response.data;
});

export const fetchAsyncMovieOrShowDetail=createAsyncThunk('moviesObj/fetchAsyncMovieOrShowDetails',async (id)=>{
    const response=await MovieApi
       .get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
       return response.data;
});


const initialState={
    moviesObj:{},
    seriesObj:{},
    movieOrShowDetail:{},
    text:{}
}

const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        removeMovieOrShow:(state,action)=>{
            state.movieOrShowDetail={}
        },
        addMovieName:(state,action)=>{
            state.text=action.payload
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,action)=>{
            console.log("fulfilled")
            return {...state,moviesObj:action.payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected")
        },
        [fetchAsyncSeries.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncSeries.fulfilled]:(state,action)=>{
            return {...state,seriesObj:action.payload}
        },
        [fetchAsyncSeries.rejected]:()=>{
            console.log("rejected")
        },
        [fetchAsyncMovieOrShowDetail.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,action)=>{
            return {...state,movieOrShowDetail:action.payload}
        }
    }
})


export const {removeMovieOrShow,addMovieName}=movieSlice.actions;
export default movieSlice.reducer