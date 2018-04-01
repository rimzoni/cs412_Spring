import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {

    render () {
      return (
        <div>
        
          <li>
            <Link to="/departments">Departments</Link>
          </li>
       </div>
     )
   }
 }
 export default Header
