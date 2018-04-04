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
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/custom">Custom</Link>
          </li>
          <li>
            <Link to="/all1234">Table1234Grid</Link>
          </li>
       </div>
     )
   }
 }
 export default Header
