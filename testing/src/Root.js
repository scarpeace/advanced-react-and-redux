// Componente que exporta a store e o provider
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from 'reducers'

export default ({ children, initialState = {} }) => {
  // O porque de nós estarmos iniciando o initial state com props.initialState tá documentado no arquivo de teste do CommentList
  
  // Redux Dev Tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(reduxPromise)
  ));
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}