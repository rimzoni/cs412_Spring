import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class _140302063Grid extends Component {
  constructor () {
    super()
    this.state = {
      model: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmitById = this.handleSubmitById.bind(this);
  }

  handleClick () {
    axios.get('http://localhost:3000/all_140302063')
        .then(response => this.setState({model: response.data}))
        //.then(response => console.log(response))
  }

  handleClear () {
    this.setState({model: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let department = event.target.department.value
   console.log(department)
  axios.get('http://localhost:3000/140302063ByDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({model: response.data}))
 }

 handleSubmitById(event) {
  event.preventDefault();
  let id = event.target.id.value
  console.log(id)
 axios.get('http://localhost:3000/140302063ById?id='+ id, { "id" : id } )
    .then(response => this.setState({model: [response.data]}))
}

  render () {
    return (
      <div>
      <Header />
       <button className='button' onClick={this.handleClick}>Show all rows from 140302063</button>
       <br/>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor="department">Enter the department to search</label>
         <input id="department" type="text" name="department" />
         <input type="submit" name="Filter by department" />
       </form>
       <form onSubmit={this.handleSubmitById}>
         <label htmlFor="id">Enter the id to search</label>
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
         { this.state.model.map((model, key) => {
                   return (
                      <tr key={key}>
                        <td>{model.id}</td>
                        <td>{model.department}</td>
                        <td>{model.manager}</td>
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
export default _140302063Grid
