import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Table, Container } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { s140302058Actions } from '../actions'

class S140302058Component extends Component {
  constructor (props) {
    super()
    this.state = {
        s140302058s: []
    }
    this.props = props
    this.getS140302058 = this.getS140302058.bind(this);
  }

  componentWillMount () {
    this.getS140302058();
  }

  getS140302058 () {
    this.props.actions.fetchOneS140302058s().then(response => this.setState({s140302058s: response.data}))
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
        { this.props.s140302058s.map((photo, key) => {
                  return (
                     <Table.Row key={key}>
                       <Table.Cell>{photo.albumId}</Table.Cell>
                       <Table.Cell>{photo.id}</Table.Cell>
                       <Table.Cell>{photo.title}</Table.Cell>
                       <Table.Cell><img src = {photo.url}/></Table.Cell>
                       <Table.Cell><img src = {photo.thumbnailUrl}/></Table.Cell>
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
const mapStateToProps = ({s140302058}) => s140302058
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        s140302058Actions
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(S140302058Component)
