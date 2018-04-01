import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class S140302058Grid extends Component {
  constructor () {
    super()
    this.state = {
      S140302058: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/140302058s')
        .then(response => this.setState({S140302058: response.data}))
        .then(response => console.log(response))
  }

  handleClear () {
    this.setState({S140302058: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let department = event.target.department.value
   console.log(department)
  axios.get('http://localhost:3000/140302058ByDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({S140302058: response.data}))
 }

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all rows</button>
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
         </tr>
        </thead>
        <tbody>
         { this.state.S140302058.map((S140302058, key) => {
                   return (
                      <tr key={key}>
                        <td>{S140302058.id}</td>
                        <td>{S140302058.department}</td>
                        <td>{S140302058.manager}</td>
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
export default S140302058Grid
