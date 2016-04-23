import React from 'react'
import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'

class Test extends React.Component {
    render() {
        return <div>
            /test
        </div>
    }
}

export default (store) => (
  <Route path='/' component={CoreLayout}>
      
      <Route path="/test" compoent={Test} />
      
    <IndexRoute component={HomeView} />
  </Route>
)
