import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {

    render () {
      return (
        <div className="alert alert-secondary" role="alert">
        <ul className="list-group">
        <li className="list-group-item"><Link to="/">Home</Link></li>
        <li className="list-group-item"><Link to="/departments">Departments</Link></li>
 
            </ul>
       </div>
     )
   }
 }
 export default Header
