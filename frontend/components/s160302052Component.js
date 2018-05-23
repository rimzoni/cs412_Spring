import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { s160302052Action } from '../actions'

class s160302052Component extends Component {
    render () {
      return (
        <div>
        <Header />
            <Image src='http://placehold.it/600/121fa4' size='large' />
       </div>
     )
   }
 }

 const mapStateToProps = ({thing}) => thing
 const mapDispatchToProps = dispatch => {
   return {
     actions: bindActionCreators(
       Object.assign(
         {},
         s160302052Action
       ),
       dispatch
     )
   }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(s160302052Component)
