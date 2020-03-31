import {SAVE_COMMENT} from 'actions/types'
import {FETCH_COMMENTS} from 'actions/types'

import axios from 'axios'

export function saveComment(comment){
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

// Não precisa colocar async await aqui por conta do middlaware redux-promise que a gente tá usando
export function fetchComments(){
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}