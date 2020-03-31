## Projeto criado para acompanhar o curso de Advanced React and Redux

[TESTING]

- Ao criar o projeto com npx create-react-app o jest é automaticamente instalado como dependência
- Foram instaladas mais duas dependências para fazer os testes. São elas:
 * Enzyme (yarn add enzyme)
 * Enzyme Adapter React (yarn add enzyme-adapter-react-(versão do react))
- Elas foram criadas pelo AirBNB para falicitar a integração de testes com elementos do React

 - O arquivo de configuração padrão do enzyme tem que ser:
  `import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})`
  * e tem que se chamar setupTest.js criado na pasta SRC

- Foi instalada uma dependência chamada moxios - Fica de olho no axios e ve se teve algum request. Ele não deixa o request ser finalizado
    mas avisa o axios que deu tudo certo e dá uns dados pra ele trabalhar como resposta.

[REDUX]

- Adiciona Redux e React-Redux
- Axios foi Instalado 
- Foi instalada uma dependência chamada redux-promise - Async dentro do redux.
