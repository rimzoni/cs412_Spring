import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Table, Container } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../actions'

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
  }

  handleClear () {
    this.setState({users: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let name = event.target.name.value
   console.log(name)
  axios.get('http://localhost:3000/cars')
     .then(response => this.setState({users: response.data}))
 }

  render () {
    return (
      <Container>
      <Header />
       <Button primary className='button' onClick={this.handleClick}>Show all cars</Button>
       <br/><br/>
       <br/>
       <Table celled padded>
        <Table.Header>
         <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Model</Table.HeaderCell>
         </Table.Row>
        </Table.Header>
        <Table.Body>
         { this.props.users.map((cars, key) => {
                   return (
                      <Table.Row key={key}>
                        <Table.Cell>{cars.id}</Table.Cell>
                        <Table.Cell>{cars.model}</Table.Cell>
                      </Table.Row>
                    )
                   })
         }
         </Table.Body>
        </Table>
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
