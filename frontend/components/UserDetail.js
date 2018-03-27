import React, { Component } from 'react'

import axios from 'axios'
import Header from './Header'

class UserDetail extends Component {
  constructor () {
    super()
    this.state = {
      user: {}
    }

    this.getUserById = this.getUserById.bind(this)
  }

  getUserById (userId) {
    axios.get('http://localhost:3000/userById?=id'+userId)
        .then(response => this.setState({user: response.data}))
        //.then(response => console.log(response))
  }

    render () {
      return (
        <div>
        <Header />
         I am User detail {this.state.user.name}
        </div>
     )
   }
 }
 export default UserDetail
