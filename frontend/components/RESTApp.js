import React, { Component } from 'react'
//import './App.css'

import axios from 'axios'

class RESTApp extends Component {
  constructor () {
    super()
    this.state = {
      users: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/users')
        .then(response => this.setState({users: response.data}))
        //.then(response => console.log(response))
  }

  handleClear () {
    this.setState({users: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let name = event.target.name.value
   console.log(name)
  axios.get('http://localhost:3000/userByName?name='+ name, { "name" : name } )
     .then(response => this.setState({users: response.data}))
 }

 handleSubmit2(event) {
  event.preventDefault();
  let email = event.target.email.value
  console.log(email)
 axios.get('http://localhost:3000/userByEmail?email='+ email, { "email" : email } )
    .then(response => {
      this.setState({users: response.data});
    });
}


  render () {
    return (
      <div>
       <button className='button' onClick={this.handleClick}>Show all Users</button>
       <br/>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor="name">Enter name to search</label>
         <input id="name" type="text" name="name" />
         <input type="submit" name="Filter by name" />
       </form>
       <br/>
       <form onSubmit={this.handleSubmit2}>
         <label htmlFor="email">Enter email to search</label>
         <input id="email" type="text" name="email" />
         <input type="submit" name="Filter by email" />
       </form>
       <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
         </tr>
        </thead>
        <tbody>
         { this.state.users.map((user, key) => {
                   return (
                      <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
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
export default RESTApp
