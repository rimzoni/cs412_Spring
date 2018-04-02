import React, { Component } from 'react'

import axios from 'axios'

class Grid extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/users')
        .then(response => this.setState({users: response.data}))
  }

  render () {
    return (
      <div>
       <button className='button' onClick={this.handleClick}>Show all</button>
       <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>Department</th>
          <th>Manager</th>
         </tr>
        </thead>
        <tbody>
         {
          this.state.users.map((user, key) => {
                   return (
                      <tr key={key}>
                        <td>{user.ID}</td>
                        <td>{user.Department}</td>
                        <td>{user.Manager}</td>
                      </tr>
                    )})
         }
         </tbody>
        </table>
       </div>
    )
  }
}
export default Grid
