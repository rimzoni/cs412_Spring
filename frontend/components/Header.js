import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {

    render () {
      return (
        <div>
        <h3>Welcome to the Grid Project 1</h3>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/departments">Departments</Link></li>
       </div>
     )
   }
 }
 export default Header
