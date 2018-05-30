import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'
import Header from './Header'
import { Button, Form, Table, Container,  Checkbox } from 'semantic-ui-react'
import axios from 'axios'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { s140302059Action } from '../actions'


class s140302059Component extends Component {
  constructor (props) {
    super()
    this.state = {
      s140302059s: []
    }

    this.props = props
    console.log(props)


  }

  componentWillMount() {
    this.props.actions.fetchs140302059s()
  }

  render() {
    return (
      <Container>
      const ImageExampleWrapped = () => (
        <Image src={s140302059s.url} size='small' wrapped />
      </Container>
    )
  }


}
const mapStateToProps = ({s140302059}) => s140302059
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        s140302059Action
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(s140302059Component)
