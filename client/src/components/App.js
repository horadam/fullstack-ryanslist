import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
import '../styles/base.css'
import Home from './Home'
import Post from './Post'
import CurrentCategory from './CurrentCategory'
import CurrentListing from './CurrentListing'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="container">
            <Route exact path="/" component={Home}/>
            <Route path="/post/:categoryId" component={Post}/>
            <Route exact path="/:slug" component={CurrentCategory}/>
            <Route path="/listing/:id" component={CurrentListing} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App