import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import AppNavBar from './components/AppNavBar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <div className="container">
            <ShoppingList />
            <ItemModal />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App