import React from "react";
import './App.scss'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import MovieDetail from './components/moviedetail/MovieDetail'
import PageNotFound from './components/pageNotFound/PageNotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:id" element={<MovieDetail/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
