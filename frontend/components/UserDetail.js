import React, { Component } from 'react'

import axios from 'axios'
import AppHeader from './Header'
import { Button, Form, Container, Header } from 'semantic-ui-react'


class UserDetail extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        name: '',
        email: ''
      }
    }
    this.getUserById = this.getUserById.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeUserById = this.removeUserById.bind(this)
  }
  componentWillMount () {
    if(this.props.match.params.type == 'edit') {
      this.getUserById(this.props.match.params.userId)
    }
  }
  getUserById (userId) {
    axios.get('http://localhost:3000/userById?id='+userId)
        .then(response => this.setState({user: response.data}))
        //.then(response => console.log(response))
  }
  removeUserById (e,userId) {
    e.preventDefault()
  	e.stopPropagation()
    axios.get('http://localhost:3000/user/delete?id='+userId)
        .then(this.props.history.push('/users'))
  }
  handleSubmit(e) {
    e.preventDefault()
  	e.stopPropagation()
    let name = e.target.name.value
    let email = e.target.email.value

    if(this.props.match.params.type == 'edit') {
      axios.post('http://localhost:3000/user/update', {user: {
        'id': this.props.match.params.userId,
        'name': name,
        'email': email
      }}).then(response => this.setState({user: response.data}))
    } else {
      axios.post('http://localhost:3000/user/create', {user: {
        'name': name,
        'email': email
      }}).then(response => this.setState({user: response.data}))
    }
  }
  handleChange(event,field) {
    switch (field) {
      case 'name':
      this.setState(
        {user: {
          name: event.target.value,
          email: this.state.user.email
        }});
        break;
      case 'email':
        this.setState(
          {user: {
            name:  this.state.user.name,
            email: event.target.value
          }});
        break;
      default:
      this.setState(
        {user: {
          name: this.state.user.name,
          email: this.state.user.email
        }});
        break;
    }
  }
  render () {
      return (
        <Container>
        <AppHeader />
         <Header as='h3'>User detail page for user: {this.state.user.name}</Header>

         <Form onSubmit={this.handleSubmit}>
          <Form.Field>
           <label>
            Name:
            <input type="text" name="name" value={this.state.user.name} onChange={(e) => this.handleChange(e, 'name')} />
            </label>
          </Form.Field>
          <Form.Field>
           <label>
            Email:
            <input type="text" name="email" value={this.state.user.email} onChange={(e) => this.handleChange(e, 'email')} />
           </label>
          </Form.Field>
          <Button primary type='submit'>Submit</Button>
          <Button secondary className='button' onClick={(e) => this.removeUserById(e, this.state.user.id)}>Remove user</Button>
         </Form>
         </Container>
     )
   }
 }
 export default UserDetail
