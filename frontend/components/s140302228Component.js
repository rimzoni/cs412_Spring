import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Table, Container } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { s140302228Action } from '../actions'

class s140302228Component extends Component {
  constructor (props) {
    super()
    this.state = {
        s140302228s: []
    }
    this.props = props
  }

  componentWillMount () {
    this.props.actions.fetch140302228().then(response => this.setState({s140302228s: response.data}))
  }

  render () {
    return (
      <Container>
      <Header />
      <Table >
       <Table.Header>
        <Table.Row>
         <Table.HeaderCell>
           Album Number
           </Table.HeaderCell>
         <Table.HeaderCell>
           ID
           </Table.HeaderCell>
         <Table.HeaderCell>
           Title
           </Table.HeaderCell>
         <Table.HeaderCell>
           Photo
           </Table.HeaderCell>
         <Table.HeaderCell>
           Thumbnail
           </Table.HeaderCell>
        </Table.Row>
       </Table.Header>
       <Table.Body>
        { this.props.s140302228s.map((photo, key) => {
                  return (
                     <Table.Row key={key}>
                       <Table.Cell>
                       {photo.albumId}
                       </Table.Cell>
                       <Table.Cell>
                       {photo.id}
                       </Table.Cell>
                       <Table.Cell>
                       {photo.title}
                       </Table.Cell>
                       <Table.Cell>
                         <img src = {photo.url}/>
                         </Table.Cell>
                       <Table.Cell>
                         <img src = {photo.thumbnailUrl}/>
                         </Table.Cell>
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
const mapStateToProps = ({s140302228}) => s140302228
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        s140302228Action
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(s140302228Component)