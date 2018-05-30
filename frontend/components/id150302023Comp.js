import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from './Header'
import { Container, Header, Image, List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { id150302023action } from '../actions'

class id150302023Comp extends Component {
 constructor (props) {
   super()
   this.state = {
     data: {}
   }
   this.props = props
   console.log(props)
 }
 componentWillMount(){
   this.props.actions.fetchPic()
 }

 render () {
   const {data} = this.props || {}
   return (
     <Container>
     <AppHeader />
     <Header />
      {data.id !== undefined &&
        <div>
         <Image src={data.url}/>
        </div>
      }
      </Container>
   )
 }
}

const mapStateToProps = ({photoProps}) => photoProps

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