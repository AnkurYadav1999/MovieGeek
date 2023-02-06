import React from 'react'
import { Link } from 'react-router-dom'
import userImage from "../../images/User-Profile-PNG-Image.png"
import Search from '../search/Search'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
      <div className='logo'>
      <h1>MovieGeek</h1>
      </div>
      </Link>
      <div className='searchbar'>
       <Search/>
      </div>
      <div className='user-img'>
        <img src={userImage} alt='user-icon'/>
      </div>
    </div>
  )
}

export default Header