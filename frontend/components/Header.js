import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions, loginActions } from '../actions'
class Header extends Component {
  constructor(props){
    super()
    this.props= props
  }
    render () {
      const user = this.props.loginProps.user !== undefined
      ? this.props.loginProps.user : {logged:false, email: ''}
      return (
        <Menu inverted>
          <Menu.Item>
            <Link to="/" >Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/projectPage">130303008</Link>
          </Menu.Item>

          {!user.logged &&
            <Menu.Item position='right'>
              <Menu.Item position='right'>
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item position='right'>
                <Link to="/signup">Signup</Link>
              </Menu.Item>
            </Menu.Item>
          }
          {user.email && <Segment>{user.email} </Segment>}
       </Menu>
     )
   }
 }
//  export default Header
 function mapStateToProps (state) {
  return {
    user: state.user,
    loginProps: state.loginProps
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        userActions,
        loginActions
      ),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
