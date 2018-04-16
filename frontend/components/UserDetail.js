import React, { Component } from 'react'

import axios from 'axios'
import AppHeader from './Header'
import { Button, Form, Container, Header, Message } from 'semantic-ui-react'


class UserDetail extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        name: '',
        email: ''
      },
      errorName: '',
      errorEmail: ''
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
  validateFields(name, email){
    let hasErrors = false
    if(name.length <= 4) {
      this.setState({errorName:'Name must be larger then 4 chars'})
      hasErrors = true
    } else {
      this.setState({errorName:''})
    }
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validateEmail= regex.test(email)
    if(!validateEmail){
      this.setState({errorEmail:'Email is not in valid format example@ius.ba'})
      hasErrors = true
    } else {
      this.setState({errorEmail:''})
    }
    return hasErrors
  }
  handleSubmit(e) {
    e.preventDefault()
  	e.stopPropagation()
    let name = e.target.name.value
    let email = e.target.email.value
    let hasErrors = this.validateFields(name,email)

    if(!hasErrors){
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
            Full Name:
            <input type="text" name="name" required={true} value={this.state.user.name} onChange={(e) => this.handleChange(e, 'name')} />
            </label>
           { this.state.errorName &&
              <Message
                color='red'
                header="Full Name field error"
                content={this.state.errorName}
              />
            }
          </Form.Field>
          <Form.Field>
           <label>
            Email:
            <input type="text" name="email" required={true} value={this.state.user.email} onChange={(e) => this.handleChange(e, 'email')} />
           </label>
            { this.state.errorEmail &&
              <Message
              color='red'
                header="Email field error"
                content={this.state.errorEmail}
              />
            }
          </Form.Field>
          <Button primary type='submit'>Submit</Button>
          <Button secondary className='button' onClick={(e) => this.removeUserById(e, this.state.user.id)}>Remove user</Button>
         </Form>
         </Container>
     )
   }
 }
 export default UserDetail
