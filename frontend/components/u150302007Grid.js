import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

class u150302007Grid extends Component {

    render () {
      return (
        <div>
        <Header />
          <h3>
            u150302007Grid page
          </h3>
          <p> If you want to go back use links bellow</p>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/custom">Custom</Link>
          </li>
       </div>
     )
   }
 }
 export default u150302007Grid
