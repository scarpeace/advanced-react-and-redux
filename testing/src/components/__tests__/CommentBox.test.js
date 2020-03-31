import React from 'react'
// Full-DOM \/
import { mount } from 'enzyme'
import 'setupTest'
import Root from 'Root'
import CommentBox from 'components/CommentBox'

let wrapped;

beforeEach(() => {
  wrapped = mount(
  <Root>
    <CommentBox />
  </Root>
  );
});

// Quando vem um fullDom é necessário sempre fazer uma limpeza no sistema.
afterEach(() => {
  wrapped.unmount();
})

it('has a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', () => {

  beforeEach(() => {
    // Estamos simulando o usuário inputando dados aqui, como o setState não é chamado pelo arquivo de testes, nós temos que dar o update() no elemento
    //  pra finalmente executar o setSate
    // -----
    //  // Primeiro acha o text area e coloca o texto lá dentro. Lembrando que o evento tem que ser chamado na forma simples como HTML (change,click,hover,mouseover)
    // O target.value é especificado com a sitaxe demonstrada abaixo
    wrapped.find('textarea').simulate('change', {
      target: { value: 'New Comment' }
    });
    // Aqui estamos renderizando o componente
    wrapped.update()
  })

  it('has a text area that users can type in', () => {

    // Agora estamos verificando se a text area recebeu o texto devido (PROP), pela função do setState(durante o input). Que automaticamente atualiza o estado.
    expect(wrapped.find('textarea').prop('value')).toEqual('New Comment')
  })

  it('has to clean the text area after submit', () => {

    // Acha o formulário e simula o método submit já com o texto lá dentro.
    wrapped.find('form').simulate('submit')
    // Novo Render
    wrapped.update()

    // Checa se o prop que foi enviado pra textarea ser igual a uma string vazia
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
