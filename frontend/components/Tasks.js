import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class TasksComponent extends Component {
  constructor () {
    super()
    this.state = {
      tasks: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/tasks')
        .then(response => this.setState({tasks: response.data}))
        //.then(response => console.log(response))
  }

  handleClear () {
    this.setState({tasks: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let name = event.target.name.value
   let status = event.target.status.value
   console.log(`Name: ${name} and status ${status}`)
   if(name !== '') {
   axios.get('http://localhost:3000/task/name?name='+ name, { "name" : name } )
   .then(response => this.setState({tasks: response.data}))
      }
      else if(status !== '' && name === '') {
        axios.get('http://localhost:3000/task/status?status='+ status, { "status" : status } )
   .then(response => this.setState({tasks: response.data}))
  }
}

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all tasks</button>
       <br/>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor="name">Enter the name to search</label>
         <input id="name" type="text" name="name" />
         <label htmlFor="status">Enter the status to search</label>
         <input id="status" type="text" name="status" />
         <input type="submit" name="Filter by name and status" />
       </form>
       <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
         </tr>
        </thead>
        <tbody>
         { this.state.tasks.map((task, key) => {
                   return (
                      <tr key={key}>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>{task.email}</td>
                        <td><Link to={'/task/'+task.id}>edit</Link></td>
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
export default TasksComponent
