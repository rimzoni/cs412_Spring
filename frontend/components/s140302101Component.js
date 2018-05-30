import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from './Header'
import { Container, Header, Image, List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { s140302101actions } from '../actions'

class s140302101Component extends Component {
  constructor (props) {
    super()
    this.state = {
      Project2: {}
    }
    this.props = props
    console.log(props)
  }
  componentWillMount(){
    this.props.actions.fetchPhoto()
  }

  render () {
    const {Project2} = this.props || {}
    return (
        <Container>
        <AppHeader />
        <Header />
         {viewProject.id !== undefined &&
           <div align="center">
            <List divided relaxed>
              <List.Item><h3>Project2</h3></List.Item>
              <List.Item>Title: {Project2.title}</List.Item>
              <List.Item><Img src={Project2.url} size='medium' circular centered /></List.Item>
              <List.Item>AlbumId: {Project2.albumId}</List.Item>
              <List.Item>PhotoId: {Project2.id}</List.Item>
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
          s140302101Actions
        ),
        dispatch
      )
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(s140302101Component)
