// Aqui tá sendo importado o reducer todo. Como tá export default a gente pode renomear o reducer aqui. No redux fazemos isso no combineReducers
import commentsReducer from 'reducers/comments'
import {SAVE_COMMENT} from 'actions/types'

it('handles actions of type SAVE_COMMENT',()=>{
  
  // Cria uma action com dados estáticos
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  // Cria a variável new State utilizando o reducer que foi importado.
  // Se tudo der certo o novo estado vai ser um array só com o 'New Comment dentro'
  // O primeiro argumento passado aqui é o estado anterior(ou incial) da aplicação.
  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment'])
});

// Verifica se o reducer consegue evitar lidar com action.types desconhecidos
it('does not handle aplications with UNKOW type', ()=>{

  // Aqui poderiamos ter criado uma action fake com algum dado aleatório. 
  //    mas passando um objeto vazio o type automaticamente é unknow (undefined)
  //    Para deixar mais explícito podemos passar um type:'rAnDoMsTrInG'
  const newState = commentsReducer([], {});

  expect(newState).toEqual([])
})