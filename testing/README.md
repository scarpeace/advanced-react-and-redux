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


[REDUX]

- Adiciona Redux e React-Redux
