import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class a160302052Grid extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClickId = this.handleClickId.bind(this)
    this.handleClickDepartment = this.handleClickId.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleClear = this.handleClear.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/a160302052Grid')
        .then(response => this.setState({users: response.data}))
        //.then(response => console.log(response))
  }

  handleClickId (event) {
    event.preventDefault();
    let id = event.target.id.value
    console.log(id)
   axios.get('http://localhost:3000/a160302052GridById?id='+ id, { "id" : id } )
      .then(response => this.setState({users: response.data}))
  }

  handleClickDepartment (event) {
    event.preventDefault();
    let department = event.target.department.value
    console.log(department)
   axios.get('http://localhost:3000/a160302052GridByDepartment?department='+ department, { "department" : department } )
      .then(response => this.setState({users: response.data}))
  }

  handleClear () {
    this.setState({users: []  })
  }

 //  handleSubmit(event) {
 //   event.preventDefault();
 //   let id = event.target.id.value
 //   console.log(id)
 //  axios.get('http://localhost:3000/a160302052GridById?id='+ id, { "id" : id } )
 //     .then(response => this.setState({users: response.data}))
 // }

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all</button>
       <br/>
       <form onSubmit={this.handleClickId}>
         <label htmlFor="id">Enter the id to search</label>
         <input id="id" type="text" name="id" />
         <input type="submit" name="Filter by id" />
       </form>
       <form onSubmit={this.handleClickDepartment}>
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
         { this.state.users.map((user, key) => {
                   return (
                      <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.department}</td>
                        <td>{user.manager}</td>
                        // <td><Link to={'/user/'+user.id}>edit</Link></td>
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
export default a160302052Grid
