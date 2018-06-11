import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Table, Container, Grid, Image } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../actions'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

class UserGrid extends Component {
  constructor (props) {
    super()
    this.state = {
      users: []
    }
    this.props = props
    console.log(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick () {
    this.props.actions.fetchUsers().then(response => this.setState({users: response.data}))
    // axios.get('http://localhost:3000/users')
    //     .then(response => this.setState({users: response.data}))
    //     //.then(response => console.log(response))
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

  render () {
    return (
      <Container>
      <Header />
       <Button primary className='button' onClick={this.handleClick}>Show all users</Button>
       <Button secondary><Link to={'/user/create'}>Create New User</Link></Button>
       <br/><br/>
       <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label htmlFor="name">Enter the name to search</label>
          <input id="name" type="text" name="name" />
        </Form.Field>
        <Button type='submit'>Filter by name</Button>
       </Form>
       <br/>

       <Grid celled padded columns={5} divided>
        // <Table.Body>
         { this.props.users.map((user, key) => {
                   return (
                      <Grid.Row key={key}>
                        <Grid.Column>{user.id}</Grid.Column>
                        <Grid.Column>{user.name}</Grid.Column>
                        <Grid.Column>{user.email}</Grid.Column>
                        <Grid.Column>{user.token}</Grid.Column>
                        <Grid.Column color='yellow'>
                          <Link to={'/user/edit/'+user.id}>edit</Link>
                        </Grid.Column>
                      </Grid.Row>
                    )
                   })
         }
         // </Table.Body>
        </Grid>

       </Container>
    )
  }
}
const mapStateToProps = ({user}) => user
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        userActions
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserGrid)
