import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
class MyGrid extends Component {
constructor () {
    super()
    this.state = {
      users: []
    }


     this.handleClick = this.handleClick.bind(this);
     this.handleIdClick = this.handleIdClick.bind(this); 
     this.handleDepartmentClick = this.handleDepartmentClick.bind(this);      
}
    handleClick () {
    axios.get('http://localhost:3000/all')
        .then(response => this.setState({users: response.data}))
        console.log("getting response"); 
  }

  handleIdClick(event){
    event.preventDefault();
    let id = document.getElementsByName("id")[0].value;
   console.log("id: "+ id); 
  axios.get('http://localhost:3000/byID?id='+ id, {"id" : id} )
     .then(response => this.setState({users: response.data}))
  }

  handleDepartmentClick(event){
   event.preventDefault();
    let department = document.getElementsByName("department")[0].value;
   console.log("department: "+ department); 
  axios.get('http://localhost:3000/byDepartment?department='+ department, {"department" : department} )
     .then(response => this.setState({users: response.data})) 
  }
    render () {
      return (
        <div>
        <Header />
          <h1>160302174 Grid</h1>
          <button onClick={this.handleClick}>Show Whole table</button>
          <form>
          <label htmlFor="department">Search by department</label>
         <input id="department" type="text" name="department" />
         <button onClick = {this.handleDepartmentClick}>Submit</button>
         <label htmlFor= "id">Search by ID</label>
         <input id="id" type="text" name="id"/>
         <button onClick ={this.handleIdClick}>Submit</button>
          </form>
          <table>
        <thead>
         <tr>
          <th>Id</th>
          <th>Department</th>
          <th>Name</th>
         </tr>
        </thead>
       <tbody>
       { this.state.users.map((user, key) => {
                   return (
                      <tr key={key}>
                        <td>{user.ID}</td>
                        <td>{user.Department}</td>
                        <td>{user.Manager}</td>
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
 export default MyGrid
