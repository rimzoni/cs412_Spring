import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class Header extends Component {
  constructor(props){
    super()
    this.props= props
  }
    render () {
      const user = this.props.user !== undefined
      ? this.props.user : {logged:false, email: ''}

      return (
        <Menu inverted>
          <Menu.Item>
            <Link to="/" >Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/custom">Custom</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/tasks">Tasks</Link>
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
 export default Header
