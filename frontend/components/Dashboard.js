import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { Segment, Container } from 'semantic-ui-react'
import * as qs from 'query-string'
const urlParams = qs.parse(window.location.search)
const login = urlParams.login || null
class Dashboard extends Component {

    render () {
      return (
        <Container>
          <Header />
          {login &&
            <Segment>
              User is signed in successfully!
            </Segment>}
       </Container>
     )
   }
 }
 export default Dashboard
