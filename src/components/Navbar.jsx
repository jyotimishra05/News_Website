import React, { useState } from 'react'
import "./style.css"
import Search from './Search'

const Navbar = ({setCategory,setSearchTerm}) => {
  
  const handleClick=(e)=>{
    console.log(e.target.textContent.toLowerCase())
    setCategory(e.target.textContent.toLowerCase())

  }
  

  return (

    <div>
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
    <div className="container-fluid">
  
      <a className="navbar-brand text-light" href="#"><span className="badge bg-dark fs-4">Indian Express</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <div className="nav-link text-light navLink txt" onClick={handleClick}>Business</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light navLink txt" onClick={handleClick}>Entertainment</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light navLink txt" onClick={handleClick}>General</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light navLink txt" onClick={handleClick} >Sports</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light navLink txt" onClick={handleClick}>Science</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light navLink txt" onClick={handleClick}>Health</div>
          </li>
          <li className="nav-item">
            <div className="nav-link text-light navLink txt" onClick={handleClick}>Technology</div>
          </li>
          
          
        </ul>
        <Search setSearchTerm={setSearchTerm}/>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
