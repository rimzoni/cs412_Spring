import UserDetail from './components/UserDetail'
import Dashboard from './components/Dashboard'
import Custom from './components/Custom'

import MyGrid from './components/MyGrid'
import { BrowserRouter, Route } from 'react-router-dom'

const router = (
          <Route location={location} path='/' exact component={Dashboard} />
          <Route location={location} path='/users' exact component={UserGrid} />
          <Route location={location} path='/user/:userId' exact component={UserDetail} />

          <Route location = {location} path = '/MyGrid' exact component = {MyGrid}/>
          <Route location={location} path='/custom' exact component={Custom} />
          </div>
        )}
