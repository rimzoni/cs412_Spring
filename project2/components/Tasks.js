import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import { Button, Form, Table, Container,  Checkbox } from 'semantic-ui-react'
import axios from 'axios'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { taskActions } from '../actions'


class TasksComponent extends Component {
  constructor (props) {
    super()
    this.state = {
      tasks: []
    }

    this.props = props
    console.log(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleClearClick=  this.handleClearClick.bind(this);
  }

  componentWillMount() {
    this.props.actions.fetchTasksByUserId(this.props.loginProps.user.id)
  }

  handleClick () {
    this.props.actions.fetchAllTasks()
  }

  handleClearClick () {
    this.props.actions.clearTasks()
  }

  handleClear () {
    this.setState({tasks: []  })
  }

  handleSubmit(event) {
   event.preventDefault();
   let name = event.target.name.value
   let status = event.target.status.value
   console.log(`Name: ${name} and status ${status}`)
   if(name !== '') {
   axios.get('http://localhost:3000/task/name?name='+ name, { "name" : name } )
   .then(response => this.setState({tasks: response.data}))
      }
      else if(status !== '' && name === '') {
        axios.get('http://localhost:3000/task/status?status='+ status, { "status" : status } )
   .then(response => this.setState({tasks: response.data}))
  }
}

  render () {
    return (
      <Container>
      <Header />
      <Button primary className='button' onClick={this.handleClick}>Show all tasks</Button>
      <Button secondary className='button' onClick={this.handleClearClick}>Clear all tasks</Button>
      <br/><br/>
      <Form onSubmit={this.handleSubmit}>
       <Form.Field>
         <label htmlFor="name">Enter the name to search</label>
         <input id="name" type="text" name="name" />
       </Form.Field>
       <Form.Field>
         <label htmlFor="status">Enter the status to search</label>
         <input id="status" type="text" name="status" />
       </Form.Field>
       <Button type='submit'>Filter by name and status</Button>
      </Form>
      <br/>
      <Table celled padded>
        <Table.Header>
         <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
         </Table.Row>
        </Table.Header>
        <Table.Body>
         { this.props.task.tasks.map((task, key) => {
                   return (
                      <Table.Row key={key}>
                        <Table.Cell>{task.id}</Table.Cell>
                        <Table.Cell>{task.name}</Table.Cell>
                        <Table.Cell>{task.description}</Table.Cell>
                        <Table.Cell>{task.status}</Table.Cell>
                        <Table.Cell><Link to={'/task/edit/'+task.id}>edit</Link></Table.Cell>
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
function mapStateToProps (state) {
  return {
    user: state.user,
    loginProps: state.loginProps,
    task: state.task
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        taskActions
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TasksComponent)

