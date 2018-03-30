import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class _992450Grid extends Component {
  constructor () {
    super()
    this.state = {
      department: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);

  }

  handleClick () {
    axios.get('http://localhost:3000/department')
        .then(response => this.setState({department: response.data}))
        //.then(response => console.log(response))
  }

/*  handleClear () {
    this.setState({users: []  })
  }*/

  handleSubmit(event) {
   event.preventDefault();
   let department = event.target.department.value
   console.log(department)
  axios.get('http://localhost:3000/managerByDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({department: response.data}))
 }

 handleSubmit1(event) {
  event.preventDefault();
  let id = event.target.id.value
  console.log(id)
 axios.get('http://localhost:3000/departmentById?id='+ id, { "id" : id } )
    .then(response => this.setState({department: response.data}))
}

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all departments</button>
       <br/>
       <form onSubmit={this.handleSubmit1}>
        <label htmlFor="id">Enter the id to search</label>
        <input id="id" type="text" id="id" />
        <input type="submit" id="Filter by id" />
       </form>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor="department">Enter the department to search</label>
         <input id="department" type="text" department="department" />
         <input type="submit" name="Filter by department" />
        </form>
       <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>department</th>
          <th>manager</th>
         </tr>
        </thead>
        <tbody>
         { this.state.department.map((department, key) => {
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
export default _992450Grid
