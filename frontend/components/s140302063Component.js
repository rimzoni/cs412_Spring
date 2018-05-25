import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Table, Container } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { s140302063Actions } from '../actions'

class s140302063Component extends Component {
  constructor (props) {
    super()
    this.state = {
        s140302063s: []
    }
    this.props = props
    console.log(props)
    this.getPhotoByLastThreeDigits = this.getPhotoByLastThreeDigits.bind(this);
  }

  componentWillMount () {
    this.getPhotoByLastThreeDigits();
  }

  getPhotoByLastThreeDigits () {
    this.props.actions.fetchByLastThreeS140302063s().then(response => this.setState({s140302063s: response.data}))
  }

  render () {
    return (
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
        { this.props.s140302063s.map((photo, key) => {
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
    )
  }
}
const mapStateToProps = ({s140302063}) => s140302063
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        s140302063Actions
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(s140302063Component)
