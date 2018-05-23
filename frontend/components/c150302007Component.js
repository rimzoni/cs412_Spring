import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import { Button, Form, Table, Container,  Checkbox } from 'semantic-ui-react'
import axios from 'axios'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { a150302007Action } from '../actions'


class c150302007Component extends Component {
  constructor (props) {
    super()
    this.state = {
      item: {}
    }

    this.props = props
    console.log(props)

    
  }

  componentWillMount() {
    this.props.actions.fetchItems
    console.log("ispod");
    console.log(this.props);
  }

  render () {
    return (
      <Container>
      <Header />
      
      <Table celled padded>
        <Table.Header>
         <Table.Row>
          <Table.HeaderCell>Album Id</Table.HeaderCell>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Url</Table.HeaderCell>
          <Table.HeaderCell>thumbnailUrl</Table.HeaderCell>
         </Table.Row>
        </Table.Header>
        <Table.Body>
         
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
    item: state.item
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        a150302007Action
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(c150302007Component)

