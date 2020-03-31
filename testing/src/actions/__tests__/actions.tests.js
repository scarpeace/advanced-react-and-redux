import {SAVE_COMMENT} from 'actions/types'
import {saveComment} from 'actions'

it('has the correct type and payload',()=>{
  const action = saveComment('New Comment')

  expect(action.type).toEqual(SAVE_COMMENT);
  expect(action.payload).toEqual('New Comment');
})