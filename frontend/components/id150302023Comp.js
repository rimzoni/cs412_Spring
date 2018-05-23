import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from './Header'
import axios from 'axios'
import { Button, Form, Table, Container, Header, Image, App } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { id150302023action } from '../actions'

class id150302023Comp extends Component{
    constructor (props) {
        super()
        this.state = {
          photo: {}
        }
        this.props = props
        console.log(props)
    }

    componentWillMount () {
        this.props.actions.photoLoad()
    }
    render () {
        const {photo} = this.props || {}
        return (
          <Container>
          <Header />
          
           {photo.id !== undefined &&
            <Image src={photo.url} size='medium' />
            
           }
           </Container>
        )
      }
}


const mapStateToProps = ({photoLoadProps}) => photoLoadProps
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        id150302023action
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(id150302023Comp)