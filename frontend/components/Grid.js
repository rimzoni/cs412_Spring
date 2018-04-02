import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
class Grid extends Component {
constructor () {
    super()
    this.state = {
      users: []
    }


     this.handleClick = this.handleClick.bind(this);
     this.handleClick = this.handleClick.bind(this);
     this.handleClick = this.handleClick.bind(this);
}
    handleClick () {
    axios.get('http://localhost:3000/all')
        .then(response => this.setState({users: response.data}))
        console.log("getting response");
  }

  handleClick(event){
    event.preventDefault();
    let id = document.getElementsByName("id")[0].value;
   console.log("id: "+ id);
  axios.get('http://localhost:3000/byID?id='+ id, {"id" : id} )
     .then(response => this.setState({users: response.data}))
  }

  handleClick(event){
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
           <button className='button' onClick={this.handleClick}>Show all contents</button>
           <br/>
       <form>
          <label htmlFor="department">Enter the name of department</label>
         <input id="department" type="text" name="department" />
         <button onClick = {this.handleClick}>Submit</button>
         <label htmlFor= "id">Enter Id</label>
         <input id="id" type="text" name="id"/>
         <button onClick ={this.handleClick}>Submit</button>
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
                        <td>{user.Id}</td>
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
 export default Grid
