import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'

class Grid140302059 extends Component {
  constructor () {
    super()
    this.state = {
      departments: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/departments')
        .then(response => this.setState({departments: response.data}))
  }

    render () {
      return (
        <div>
        <Header />
          <label htmlFor="departments">Click the button to display all rows from the table! </label>
          <button className='button' onClick={this.handleClick}>Display</button>
          <br />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>DEPARTMENT</th>
                <th>MANAGER</th>
                </tr>
            </thead>
            <tbody>
              { this.state.departments.map((department, key) => {
                        return (
                           <tr key={key}>
                             <td>{department.id}</td>
                             <td>{department.department}</td>
                             <td>{department.manager}</td>
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
 export default Grid140302059
