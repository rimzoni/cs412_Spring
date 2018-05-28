import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import axios from 'axios'
import { Button, Form, Table, Container } from 'semantic-ui-react'
import getPhoto from '../actions/o150302017Action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class o150302017Component extends Component {
	componentDidMount(){
  		this.props.actions.getPhoto(17);
  	}
  render () {
      return (
      	<div>
      	  <Header />
          <h3>
            o150302017 Component.
          </h3>
          <h3>
            Url: {this.props.photo.data[0].url}
          </h3>

      <Table celled padded>
       <Table.Header>
        <Table.Row>
         <Table.HeaderCell>Album ID</Table.HeaderCell>
         <Table.HeaderCell>ID</Table.HeaderCell>
         <Table.HeaderCell>Title</Table.HeaderCell>
         <Table.HeaderCell>Url</Table.HeaderCell>
         <Table.HeaderCell>Thumnnail Url</Table.HeaderCell>
        </Table.Row>
       </Table.Header>
       <Table.Body>
       <Table.Row>
       		<Table.Cell>{this.props.photo.data[0].albumId}</Table.Cell>
       		<Table.Cell>{this.props.photo.data[0].id}</Table.Cell>
       		<Table.Cell>{this.props.photo.data[0].title}</Table.Cell>
       		<Table.Cell>{this.props.photo.data[0].url}</Table.Cell>
       		<Table.Cell>{this.props.photo.data[0].thumbnailUrl}</Table.Cell>
       </Table.Row>
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
      {getPhoto},
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(o150302017Component)
