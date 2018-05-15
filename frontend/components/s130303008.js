import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppHeader from './Header'
import { Container, Header, Image, List } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { s130303008Actions } from '../actions'

class s130303008 extends Component {
  constructor (props) {
    super()
    this.state = {
      viewProject: {}
    }
    this.props = props
    console.log(props)
  }
  componentWillMount(){
    this.props.actions.fetchPhoto()
  }

  render () {
    const {viewProject} = this.props || {}
    return (
      <Container>
      <AppHeader />
      <Header />
       {viewProject.id !== undefined &&
         <div align="center">
          <List divided relaxed>
            <List.Item><h3>Project II</h3></List.Item>
            <List.Item>Photo Title: {viewProject.title}</List.Item>
            <List.Item><Image src={viewProject.url} size='medium' circular centered /></List.Item>
            <List.Item>Album ID: {viewProject.albumId}</List.Item>
            <List.Item>Photo ID: {viewProject.id}</List.Item>
         </List>
         </div>
       }
       </Container>
    )
  }
}

  const mapStateToProps = ({projectProps}) => projectProps
  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        Object.assign(
          {},
          s130303008Actions
        ),
        dispatch
      )
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(s130303008)
