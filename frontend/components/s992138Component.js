import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import { Button, Form, Table, Container,  Checkbox } from 'semantic-ui-react'
import axios from 'axios'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { s992138Actions } from '../actions'


class s992138Component extends Component {
  constructor (props) {
    super()
    this.state = {
      object: {}
    }

    this.props = props
    console.log(props)


  }

  componentWillMount() {
    this.props.actions.fetchObjects
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
        </Table>
       </Container>
    )
  }
}
function mapStateToProps (state) {
  return {
    user: state.user,
    loginProps: state.loginProps,
    object: state.objects
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        s992138Actions
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(s992138Component)
