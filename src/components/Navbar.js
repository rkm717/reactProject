import React from 'react'

import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Navbar(props) {
    return (
  
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.about}</Link>
      </li>
     </ul>
     <label class="switch">
      <input type="checkbox" onClick={props.toggleMode} />
      <span class="slider round"></span>
    </label>
   </div>
  </nav>

    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
};