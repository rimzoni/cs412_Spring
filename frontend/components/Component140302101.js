import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppHeader from './Header'
import { Container, Header, Image, List } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Action140302101 } from '../actions'

class Component140302101 extends Component {
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
            <List.Item><h3>Project2</h3></List.Item>
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

  const mapStateToProps = ({project2Props}) => project2Props
  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        Object.assign(
          {},
          Action140302101
        ),
        dispatch
      )
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Component140302101)
