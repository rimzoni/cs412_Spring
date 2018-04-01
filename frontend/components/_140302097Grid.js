import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class _140302097Grid extends Component {
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
    axios.get('http://localhost:3000/rows')
        .then(response => this.setState({departments: response.data}))
        //.then(response => console.log(response))
  }

  handleSubmit(event) {
   event.preventDefault();
   let department = event.target.department.value
   console.log(department)
  axios.get('http://localhost:3000/rowbyDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({departments: response.data}))
 }

 handleSubmit2(event) {
  event.preventDefault();
  let id = event.target.id.value
  console.log(id)
 axios.get('http://localhost:3000/rowbyId?id='+ id, { "id" : id } )
    .then(response => this.setState({departments: response.data}))
}

  render () {
    return (
      <div>
      <Header />
       <br/>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor="department">Enter department: &nbsp;&ensp; </label>
         <input id="department" type="text" department="department" />
         <input type="submit" department="Filter by department" />
       </form>
       <form onSubmit={this.handleSubmit2}>
         <label htmlFor="id">Enter id: &nbsp;&nbsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; </label>
         <input id="id" type="text" id="id" />
         <input type="submit" id="Filter by id" />
       </form>
       <br/>
        <button className='button' onClick={this.handleClick}>All departments</button>
       <br/>
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
export default _140302097Grid
