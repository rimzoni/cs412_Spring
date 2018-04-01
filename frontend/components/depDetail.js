import React, { Component } from 'react'

import axios from 'axios'
import Header from './Header'

class depDetail extends Component {
  constructor () {
    super()
    this.state = {
      department: {
        department: '',
        manager: ''
      }
    }
    this.getDepartmentById = this.getDepartmentById.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount () {
    this.getDepartmentById(this.props.match.params.departmentId)
  }

  //get department by id
  getDepartmentById (departmentId) {
    axios.get('http://localhost:3000/byID?id='+departmentId)
        .then(response => this.setState({department: response.data}))
        //.then(response => console.log(response))
  }
  
  render () {
      return (
        <div>
        <Header />
         
        </div>
     )
   }
 }
 export default depDetail
