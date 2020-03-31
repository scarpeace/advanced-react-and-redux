import React from 'react'
import { mount } from 'enzyme'

import 'setupTest'

import CommentList from 'components/CommentList'
import Root from 'Root'


let wrapped;

beforeEach(() => {

  // Quando você faz o wrapp no component com o Mount ele pega tudo o que tá la dentro inclusive a conexão com o Redux
  // Logo, isso vai retornar um estado inicial vazio pois não temos registros no estado quando vamos testar a aplicação
  // Aqui estamos passando uma prop para o elemento Root simulando um estado inicial. Como se nosso usuário já tivesse colocado os dados.
  // Lá dentro do Root você coloca a propriedade que tá vindo como prop no provider e fica tudo certo.
  const initialState ={
    comments: ['Comment 1', 'Comment 2']
  }

  wrapped = mount(
    <Root initialState = {initialState}>
      <CommentList />
    </Root>)
})

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);

})

it('shows the text for each comment',()=>{
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 2')
})