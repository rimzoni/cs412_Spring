import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class DGrid extends Component {
  constructor () {
    super()
    this.state = {
      departments: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/departments')
        .then(response => this.setState({departments: response.data}))
        //.then(response => console.log(response))
  }

  handleClear () {
    this.setState({departments: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let department = event.target.department.value
   console.log(department)
  axios.get('http://localhost:3000/140302102ByDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({departments: response.data}))
 }

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all departments</button>
       <br/>
       <form onSubmit={this.handleSubmit}>
          
         <label htmlFor="department">Enter the department to search</label>
         <input id="department" type="text" name="department" />
         <input type="submit" name="Filter by department" />
       </form>
       <table>
        <thead>
         <tr>
          <th>department</th>
          <th>manager</th>
          
         </tr>
        </thead>
        <tbody>
         { this.state.departments.map((departments, key) => 
         {
                   return (
                      <tr key={key}>
                        <td>{departments.id}</td>
                        <td>{departments.department}</td>
                        <td>{departments.manager}</td>
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
export default dGrid
