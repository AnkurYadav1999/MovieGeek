import React,{useEffect} from 'react'
import MovieList from '../movielist/MovieList'
import { useDispatch,useSelector } from 'react-redux'
import {  fetchAsyncMovies ,fetchAsyncSeries} from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch=useDispatch()
  const name=useSelector((state)=>state.movieReducer.text)
  console.log(name)
  
  useEffect(()=>{
    dispatch(fetchAsyncMovies(name===""?"Harry":name))
    dispatch(fetchAsyncSeries(name===""?"friends":name))
  },[dispatch,name])
  return (
    <>
    <div className='banner-img'>
    </div>
    <MovieList/>
    </>
    
  )
}

export default Home