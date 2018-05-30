import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Table, Container } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { id140302102Actions } from '../actions'

class id140302102Component extends Component {
  constructor (props) {
    super()
    this.state = {
        id140302102: []
    }
    this.props = props
    this.getid140302102 = this.getid140302102.bind(this);
  }

  componentWillMount () {
    this.getid140302102();
  }

  getid140302102 () {
    this.props.actions.fetchOneid140302102().then(response => this.setState({id140302102: response.data}))
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
const mapStateToProps = ({id140302102}) => id140302102
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        id140302102Actions
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(id140302102Component)