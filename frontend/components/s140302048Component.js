import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Table, Container } from 'semantic-ui-react'
import getInfo from '../actions/s140302048Action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class s140302048Component extends Component {
	componentDidMount(){
  		this.props.actions.getInfo(48);
  	}
  render () {
      return (
      	<div>
      	  <Header /> 
      <Table celled padded>
       <Table.Header>
        <Table.Row>
         <Table.HeaderCell>Album ID</Table.HeaderCell>
         <Table.HeaderCell>ID</Table.HeaderCell>
         <Table.HeaderCell>Title</Table.HeaderCell>
         <Table.HeaderCell>Url</Table.HeaderCell>
         <Table.HeaderCell>Thumbnail Url</Table.HeaderCell>
        </Table.Row>
       </Table.Header>
       <Table.Body>
       { this.props.photo.data.map((photo, key) => {
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
        </div>
     )
   }

 }

const mapStateToProps = (state) => {
	return {photo: state.photo};
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {getInfo},
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(s140302048Component)

