import React from 'react'
import { shallow } from 'enzyme'
// Eu só to fazendo o import assim porque a gente configurou no .env o caminho para importação pelo caminho absoluto do arquivo
import 'setupTest'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})
it('shows a comment box component', () => {
  // Utilizamos o wrapped aqui para informar que a constante é o componente Wrapped com o shallow. Então ele tem mais algumas funcionalidades.
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list component', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})