import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import AppRouter, { history } from './routers/AppRouter'
import './App.css'
import configureStore from './store/configureStore'
import { getBlogsFromDb } from './actions/blogs'
import './firebase/firebaseConfig'
import { firebase } from './firebase/firebaseConfig'

const store = configureStore()
const result = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))
let isRendered = false

const renderApp = () => {
  if (!isRendered) {
    ReactDOM.render(result, document.getElementById('root'))
    isRendered = true
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(getBlogsFromDb()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/blogs')
      }
    })
  } else {
    renderApp()
    history.push('/')
  }
})

serviceWorker.unregister()
