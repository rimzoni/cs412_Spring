import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class AdnanGrid extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/users')
        .then(response => this.setState({users: response.data}))
        //.then(response => console.log(response))
  }
  handleDepartmentClick(event){
    event.preventDefault();
      let department = document.getElementsByName("department")[0].value;
      console.log("Department: " + department);
      axios.get('http://localhost:3000/byDepartment?department=' + department, {"department" : department})
      .then(response => this.setState({department: response.data}))
      }
      handleIDClick(event){
        event.preventDefault();
          let id = document.getElementsByName("id")[0].value;
          console.log("ID: " + id);
          axios.get('http://localhost:3000/byID?id=' + id, {"id" : id})
          .then(response => this.setState({department: response.data}))
          }
  handleClear () {
    this.setState({users: []  })
  }

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all informations</button>
       <br/>
       <form>
         <label htmlFor="department">Enter the department to search</label>
         <input id="department" type="text" name="department" />
         <button onClick = {this.handleDepartmentClick}>Search</button>
         <label htmlFor="id">Enter the ID to search</label>
         <input id="id" type="text" name="id" />
         <button onClick = {this.handleIDClick}>Search</button>
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
         { this.state.users.map((user, key) => {
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
export default AdnanGrid
