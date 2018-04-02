import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class a140302067Grid extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick () {
    axios.get('http://localhost:3000/Ahmed')
        .then(response => this.setState({users: response.data}))
        //.then(response => console.log(response))
  }





  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all rows</button>
       <br/>

       <table>
        <thead>
         <tr>
          <th>ID</th>
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
export default a140302067Grid
