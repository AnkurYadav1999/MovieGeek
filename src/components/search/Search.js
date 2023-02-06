import React,{useState} from 'react'
import './Search.scss'
import { fetchAsyncMovies,fetchAsyncSeries,addMovieName } from '../../features/movies/movieSlice'
import { useDispatch } from 'react-redux'

const Search = () => {
    const dispatch=useDispatch()
    const [input,setInput]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(input)
        dispatch(fetchAsyncMovies(input))
        dispatch(fetchAsyncSeries(input))
        dispatch(addMovieName(input))
        setInput('')
    }


  return (
    <div className='search-container'>
    <form onSubmit={submitHandler}>
    <input type="text" value={input} className='main-search'
    onChange={(e)=>setInput(e.target.value)} placeholder='Search Here'/>
    <button type='submit'><i className='fa fa-search'></i></button>
    </form>
    </div>
  )
}

export default Search
