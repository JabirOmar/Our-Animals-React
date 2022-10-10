import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function NavBar() {

  function menuBox() {
    const menu_box = document.getElementById('menu_box')
    const ulContainer = document.getElementById('ul_container')
    menu_box.classList.toggle('clicked')
    ulContainer.classList.toggle('active')
  }

  function link() {
    const menu_box = document.getElementById('menu_box')
    const ulContainer = document.getElementById('ul_container')
    menu_box.classList.remove('clicked')
    ulContainer.classList.remove('active')
  }

  return (
    <nav>
      <div id='left_nav'>
      <h4>Our Animals</h4>
        {/* <ul>
          <li>
            <NavLink to="/">Our Animals</NavLink>
          </li>
        </ul> */}
      </div>
      <div id='right_nav'>
        <div id='ul_container'>
          <ul>
          <li onClick={link}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={link}>
            <NavLink to='/animals'>Explore</NavLink>
          </li>
          <li onClick={link}>
            <NavLink to='/todoList'>Todo List</NavLink>
          </li>
          <li onClick={link}>
            <NavLink to="/signup">Register</NavLink>
          </li>
        </ul>
        </div>
        
        <div id='menu_box' onClick={menuBox}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar