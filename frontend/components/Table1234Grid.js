import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class Table1234Grid extends Component {
  constructor () {
    super()
    this.state = {
      all1234: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/all1234')
        .then(response => this.setState({all1234: response.data}))
        //.then(response => console.log(response))
  }

  handleClear () {
    this.setState({all1234: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let department = event.target.department.value
   console.log(name)
  axios.get('http://localhost:3000/1234ByDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({all1234: response.data}))
 }

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all 1234</button>
       <br/>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor="department">Enter the department to search</label>
         <input id="department" type="text" name="department" />
         <input type="submit" name="Filter by department" />
       </form>
       <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>Department</th>
          <th>Manager</th>
          <th>Action</th>
         </tr>
        </thead>
        <tbody>
         { this.state.all1234.map((single1234, key) => {
                   return (
                      <tr key={key}>
                        <td>{single1234.id}</td>
                        <td>{single1234.department}</td>
                        <td>{single1234.manager}</td>
                        <td></td>
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
export default Table1234Grid
