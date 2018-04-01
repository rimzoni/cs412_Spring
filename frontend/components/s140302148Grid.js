import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class s140302148Grid extends Component {
  constructor () {
    super()
    this.state = {
      departments: []

    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);

}

  handleClick () {
    axios.get('http://localhost:3000/departments')
        .then(response => this.setState({departments: response.data}))
        //.then(response => console.log(response))
      }


  handleSubmit(event) {
   event.preventDefault();
   let department = event.target.department.value
   console.log(department)
  axios.get('http://localhost:3000/searchByDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({departments: response.data}))
 }
 handleSubmit2(event) {
  event.preventDefault();
  let id = event.target.id.value
  console.log(id)
 axios.get('http://localhost:3000/byId?id='+ id, { "id" : id } )
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
       <br/>
       <form onSubmit={this.handleSubmit2}>
         <label htmlFor="id">Enter the id to search</label>
         <input id="id" type="text" name="id" />
         <input type="submit" name="Filter by id" />
       </form>
       <br/>
       <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>department</th>
          <th>manager</th>
         </tr>
        </thead>
        <tbody>
         {
            this.state.departments.map((department, key) => {
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
export default s140302148Grid
