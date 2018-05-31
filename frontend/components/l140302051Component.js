import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Table, Container } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { l140302051Actions } from '../actions'

class l140302051Component extends Component {
  constructor (props) {
    super()
    this.state = {
        l140302051s: {}
    }
    this.props = props
    console.log(props)
  }

  componentWillMount() {
      this.props.actions.fetchItems
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
          <Table.HeaderCell>Photo</Table.HeaderCell>
          <Table.HeaderCell>Thumbnail</Table.HeaderCell>
         </Table.Row>
        </Table.Header>
        <Table.Body>

         </Table.Body>
        </Table>
       </Container>
    )
  }
}

const mapStateToProps = ({l140302051}) => l140302051

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        l140302051Actions
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(l140302051Component)
