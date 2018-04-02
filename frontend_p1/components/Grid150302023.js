import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class Grid150302023 extends Component {
  constructor () {
    super()
    this.state = {
      departments: []
    }
  this.handleClick = this.handleClick.bind(this)
 }
  handleClick () {
    axios.get('http://localhost:3000/departments')
        .then(response => this.setState({departments: response.data}))   
  }

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all departments</button>
       <br/>
      
       <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>Department</th>
          <th>Manager</th>
          
         </tr>
        </thead>
        <tbody>
         { this.state.departments.map((department, key) => {
                   return (
                      <tr key={key}>
                        <td>{db150302023.id}</td>
                        <td>{db150302023.department}</td>
                        <td>{db150302023.manager}</td>
                        
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
export default Grid150302023
