import React, { Component } from 'react'
//import './App.css'

import axios from 'axios'

class RESTApp extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('http://localhost:3000/rows')
        .then(response => this.setState({users: response.data}))
        //.then(response => console.log(response))
  }

  render () {
    return (
      
      <div>
       <button className='button' onClick={this.handleClick}>Click Me</button>
       <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>Department</th>
          <th>Manager</th>
         </tr>
        </thead>
        <tbody>
         { this.state.users.map((user, key) => {
                   return (
                      <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.department}</td>
                        <td>{user.manager}</td>
                      </tr>
                    )
                   })
         }
         </tbody>
        </table>
       </div>
    )
  }
}
export default RESTApp
