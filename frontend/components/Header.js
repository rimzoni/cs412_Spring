import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render () {
      return (
        <div>
        <header>CS412 Project 1</header>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/departments">Departments</Link>
          </li>
          <footer>Tajib Smajlović - 140302097</footer>
       </div>

     )
   }
 }
export default Header
