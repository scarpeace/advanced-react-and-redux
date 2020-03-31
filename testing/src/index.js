import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import App from 'components/App'

// O objeto vazio como segundo argumento do createStore indica o estado inicial da nossa store, que no caso é um objeto vazio 

ReactDOM.render(
  <Root>
    <App />
  </Root>
  , document.querySelector('#root'));