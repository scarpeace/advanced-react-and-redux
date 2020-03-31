import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'


import App from 'components/App'

// O objeto vazio como segundo argumento do createStore indica o estado inicial da nossa store, que no caso é um objeto vazio 

ReactDOM.render(
  <Provider store={createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>
  , document.querySelector('#root'));