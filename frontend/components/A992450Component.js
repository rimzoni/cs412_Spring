import AppHeader from './Header'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, Header, Image, List } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { A992450Action } from '../actions'



class A992450 extends Component {

  constructor (prop) {
   super()
   this.state = {
     viewPhoto: {}
   }
   this.prop = prop
 }
 componentWillMount(){
   this.prop.actions.showPhoto()
 }

 render () {
  const {viewPhoto} = this.prop
  return (
    <Container>
    <AppHeader />
    <Header />
     {viewPhoto.id !== undefined &&
      <div align="center">
        <List>
        <List.Item>Photo Title: {viewPhoto.title}</List.Item>
        <List.Item><Image src={viewPhoto.url}  size='small' boarded /></List.Item>
        </List>
      </div>
     }
     </Container>
  )
}
}

const mapStateToProps = ({showPic}) => showPic
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        A992450Action
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(A992450)
