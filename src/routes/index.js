import React from 'react'
import {Route, IndexRoute} from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import {Services} from 'views/ServicesView/ServicesView';
import AboutView from 'views/AboutView';
import ArticlesView from 'views/ArticlesView';
import PricesView from 'views/PricesView';
import ContactsView from 'views/ContactsView';


class Test extends React.Component {
    render() {
        return <div>
            <h1>1231231</h1>
            /test
        </div>
    }
}

export default (store) => (
    <div>
        <Services/>
        <Route path='/' component={CoreLayout}>
            <IndexRoute component={HomeView}/>

            <Route path="services" component={Services}/>
            <Route path="about" component={AboutView}/>
            <Route path="articles" component={ArticlesView}/>
            <Route path="price" component={PricesView}/>
            <Route path="contacts" component={ContactsView}/>
        </Route>
    </div>
)
