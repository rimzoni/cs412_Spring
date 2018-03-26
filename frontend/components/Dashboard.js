import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Dashboard extends Component {

    render () {
      return (
        <div>
         <h3>
           <Link to="/">Dashboard</Link></h3>
          <h3>
            <Link to="/users">Users</Link></h3>
        </div>
     )
   }
 }
 export default Dashboard
