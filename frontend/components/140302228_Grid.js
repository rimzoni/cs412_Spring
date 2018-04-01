import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class DepGrid extends Component {
  constructor () {
    super()
    this.state = {
      departments: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  //show all departments with details
  handleClick () {
    axios.get('http://localhost:3000/departments')
        .then(response => this.setState({departments: response.data}))
        //.then(response => console.log(response))
  }

  handleClear () {
    this.setState({departments: []  })
  }

  //search by department
  handleSubmit(event) {
   event.preventDefault();
   let department = event.target.department.value
   console.log(department)
  axios.get('http://localhost:3000/byDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({departments: response.data}))
 }

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all departments</button>
       <br/>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor="department">Enter the name to search</label>
         <input id="department" type="text" name="department" />
         <input type="submit" name="Filter by department" />
       </form>
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
export default DepGrid
