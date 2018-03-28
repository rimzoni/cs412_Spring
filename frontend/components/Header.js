import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render () {
      return (
        <div>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/departments">Departments</Link>
          </li>
          <footer>All rights reserved &copy; 2018 Youssef Aly</footer>
       </div>

     )
   }
 }
 export default Header
