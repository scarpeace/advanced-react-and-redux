import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'

import 'setupTest'


import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'Fetched #1' },
      { name: 'Fetched #2' }]
  })
})

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
  // Tenta renderizar todo o aplicativo na DOM do Jest
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  // Acha o botão que tem fetchComments e clica nele
  wrapped.find('.fetch-comments').simulate('click')

  // Temos que colocar o delay aqui por conta do moxios receber uma chamada API
  moxios.wait(()=>{
    wrapped.update();
    //Expects a list of comments
    expect(wrapped.find('li').length).toEqual(2)

    // o Done indica aonde o teste finaliza, nesse caso é depois do delay
    // Se não colocar isso é capaz do teste ser executado direto, então a gente informa pra ele aonde ele termina. Cada IT tem um DONE
    done();

    // Limpamos o mount pra não ocupar muito espaço na memória
    wrapped.unmount();
  })

});