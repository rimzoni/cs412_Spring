import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Header extends Component {

    render () {
      return (
        <Menu inverted>
          <Menu.Item>
            <Link to="/">Dashboard</Link>
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
       </Menu>
     )
   }
 }
 export default Header
