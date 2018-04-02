import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'

class HomeworkGrid extends Component {
  constructor () {
    super()
    this.state = {
      models: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmitId = this.handleSubmitId.bind(this);

  }

  handleClick () {
    axios.get('http://localhost:3000/all')
        .then(response => this.setState({models: response.data}))
        //.then(response => console.log(response))
  }

  handleClear () {
    this.setState({models: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let department = document.getElementsByName("department")[0].value;
   console.log(department)
  axios.get('http://localhost:3000/byDepartment?department='+ department, { "department" : department } )
     .then(response => this.setState({models: response.data}))
}
handleSubmitId(event) {
 event.preventDefault();
 let id = document.getElementsByName("id")[0].value;
 console.log(id)
axios.get('http://localhost:3000/byId?id='+ id, { "id" : id } )
   .then(response => this.setState({models: response.data}))
}

  render () {
    return (
      <div>
      <Header />
       <button  onClick={this.handleClick}>Show all</button>
       <form>
         <label htmlFor="department">Enter department to search</label>
         <input id="department" type="text" name="department" />
         <button onClick = {this.handleSubmit}>Submit</button>
         <label htmlFor="id">Enter ID to search</label>
         <input id="id" type="text" name="id" />
         <button onClick = {this.handleSubmitId}>Submit</button>
       </form>
       <table>
        <thead>
         <tr>
          <th>id</th>
          <th>department</th>
          <th>manager</th>
         </tr>
        </thead>
        <tbody>
         { this.state.models.map((model, key) => {
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
export default HomeworkGrid
