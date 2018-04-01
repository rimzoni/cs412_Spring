import React, { Component } from 'react'
//import './App.css'

import axios from 'axios'

class _140302048Grid extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleDepartmentSubmit = this.handleDepartmentSubmit.bind(this);
    // cetvrti korak / bindaj funkciju za kontekst
    this.handleIdSubmit = this.handleIdSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/users')
        .then(response => this.setState({users: response.data}))
        //.then(response => console.log(response))
  }

  handleClear () {
    this.setState({users: []  })
  }

  handleDepartmentSubmit(event) {
   event.preventDefault();
   let department = event.target.department.value
   console.log(department)
  axios.get('http://localhost:3000/userByDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({users: response.data}))
 }

 // treci korak
  handleIdSubmit(event) {
    event.preventDefault();
    // email uzet iz forme
    let id = event.target.id.value;
    console.log(id)
    // saljemo requestna userByEmail rutu i saljemo email
  axios.get('http://localhost:3000/userById?id='+ id, { "id" : id } )
    // stavljamo resposne objekat u state i rerenderuje se komponenta automatski
    .then(response => this.setState({users: response.data}));
  }

  render () {
    //5 korak dodaj formu
    return (
      <div>
       <button className='button' onClick={this.handleClick}>All rows</button>
       <br/>
       <form onSubmit={this.handleDepartmentSubmit}>
         <label htmlFor="name">Enter the department to search</label>
         <input id="department" type="text" name="department" />
         <input type="submit" name="Filter by department" />
       </form>
       <form onSubmit={this.handleIdSubmit}>
         <label htmlFor="name">Enter the email to search</label>
         <input id="id" type="text" name="id" />
         <input type="submit" name="Filter by id" />
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
export default _140302048Grid