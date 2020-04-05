import { AUTH_USER, AUTH_ERROR } from './types'
import axios from 'axios'

export const signUp = (formProps, callback) => async dispatch => {
  try {
    // Dentro do formProps tá vindo o email e password como objeto. Antes tava rolando uma desestruturação pra remover os atributos.
    const response = await axios.post('http://localhost:3090/signup', formProps)
    dispatch({ type: AUTH_USER, payload: response.data })
    localStorage.setItem('token', response.data.token)
    callback()
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e.response.data.error })
  }

}

export const signOut = () => {
  
  localStorage.removeItem('token');
  
  return {
    type: AUTH_USER,
    payload: ""
  }
}

export const signIn = (formProps, callback) => async dispatch => {
  try {
    // Dentro do formProps tá vindo o email e password como objeto. Antes tava rolando uma desestruturação pra remover os atributos.
    const response = await axios.post('http://localhost:3090/signin', formProps)
    dispatch({ type: AUTH_USER, payload: response.data })
    localStorage.setItem('token', response.data.token)
    callback()
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid Login Credentials" });
  }

}